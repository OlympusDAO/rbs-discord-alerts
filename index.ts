import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import * as dotenv from "dotenv";

import { handleEvents } from "./src/handleEvents";

const pulumiConfig = new pulumi.Config();

// Read from .env
dotenv.config();

if (!gcp.config.project) {
  throw new Error("Set the project for the pulumi gcp provider");
}

if (!gcp.config.region) {
  throw new Error("Set the region for the pulumi gcp provider");
}

const SECRET_DISCORD_WEBHOOK_ALERT = "discordWebhookAlert";
const SECRET_DISCORD_WEBHOOK_EMERGENCY = "discordWebhookEmergency";

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL;
if (!NOTIFICATION_EMAIL) {
  throw new Error("Set the NOTIFICATION_EMAIL environment variable");
}

const NOTIFICATION_EMAIL_DISCORD = process.env.NOTIFICATION_EMAIL_DISCORD;
if (!NOTIFICATION_EMAIL_DISCORD) {
  throw new Error("Set the NOTIFICATION_EMAIL_DISCORD environment variable");
}

const FUNCTION_NAME = "rbs-discord-alerts";
const FUNCTION_NAME_STACK = `${FUNCTION_NAME}-${pulumi.getStack()}`;

// Create the KV store
const datastore = new gcp.firestore.Document(FUNCTION_NAME_STACK, {
  collection: "default",
  documentId: FUNCTION_NAME_STACK,
  fields: "",
});

export const datastoreId = datastore.id;

/**
 * Execution: Google Cloud Functions
 */
const FUNCTION_EXPIRATION_SECONDS = 30;
// Pull the secret into a const to work around: https://github.com/pulumi/pulumi/issues/11257
// Also use `require` instead of `requireSecret`, as requireSecret won't work
const webhookSubgraphCheck = pulumiConfig.require(SECRET_DISCORD_WEBHOOK_ALERT);
const functionSubgraphCheck = new gcp.cloudfunctions.HttpCallbackFunction(FUNCTION_NAME_STACK, {
  runtime: "nodejs14",
  timeout: FUNCTION_EXPIRATION_SECONDS,
  availableMemoryMb: 128,
  callback: async (req, res) => {
    console.log("Received callback. Initiating handler.");
    await handleEvents(datastore.documentId.get(), datastore.collection.get(), webhookSubgraphCheck);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
});

export const functionSubgraphCheckName = functionSubgraphCheck.function.name;
export const functionSubgraphCheckUrl = functionSubgraphCheck.httpsTriggerUrl;

/**
 * Scheduling: Cloud Scheduler
 */
const schedulerJob = new gcp.cloudscheduler.Job(
  FUNCTION_NAME_STACK,
  {
    schedule: "* * * * *", // Every minute
    timeZone: "UTC",
    httpTarget: {
      httpMethod: "GET",
      uri: functionSubgraphCheckUrl,
    },
  },
  {
    dependsOn: [functionSubgraphCheck],
  },
);

export const schedulerJobName = schedulerJob.name;

/**
 * Create Alert Policies
 */
// Email notification channel
const notificationEmail = new gcp.monitoring.NotificationChannel("email", {
  displayName: "Email",
  type: "email",
  labels: {
    email_address: NOTIFICATION_EMAIL,
  },
});
export const notificationEmailId = notificationEmail.id;

// Discord notification channel (via Make & email)
const notificationDiscord = new gcp.monitoring.NotificationChannel("discord", {
  displayName: "discord",
  type: "email",
  labels: {
    email_address: NOTIFICATION_EMAIL_DISCORD,
  },
});
export const notificationDiscordId = notificationDiscord.id;

// Alert when functions crash
const ALERT_POLICY_FUNCTION_ERROR = `${FUNCTION_NAME}-function-error`;
const ALERT_POLICY_FUNCTION_ERROR_WINDOW_SECONDS = 5 * 60;
new gcp.monitoring.AlertPolicy(ALERT_POLICY_FUNCTION_ERROR, {
  displayName: ALERT_POLICY_FUNCTION_ERROR,
  conditions: [
    {
      displayName: "Function Status Not OK",
      conditionThreshold: {
        filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionSubgraphCheckName}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count" AND metric.labels.status != "ok"`,
        aggregations: [
          {
            alignmentPeriod: `${ALERT_POLICY_FUNCTION_ERROR_WINDOW_SECONDS}s`,
            crossSeriesReducer: "REDUCE_NONE",
            perSeriesAligner: "ALIGN_SUM",
          },
        ],
        comparison: "COMPARISON_GT",
        duration: "0s",
        trigger: {
          count: 1,
        },
      },
    },
  ],
  alertStrategy: {
    autoClose: "604800s",
  },
  combiner: "OR",
  enabled: true,
  notificationChannels: [notificationEmailId, notificationDiscordId],
});

// Alert when there are more executions than expected (1 every minute)
const ALERT_POLICY_FUNCTION_EXECUTIONS = `${FUNCTION_NAME}-function-executions`;
const ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS = 5 * 60;
new gcp.monitoring.AlertPolicy(ALERT_POLICY_FUNCTION_EXECUTIONS, {
  displayName: ALERT_POLICY_FUNCTION_EXECUTIONS,
  conditions: [
    {
      displayName: `Function Executions > 5 / ${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS / 60} minutes`,
      conditionThreshold: {
        filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionSubgraphCheckName}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count"`,
        aggregations: [
          {
            alignmentPeriod: `${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s`,
            crossSeriesReducer: "REDUCE_NONE",
            perSeriesAligner: "ALIGN_SUM",
          },
        ],
        comparison: "COMPARISON_GT",
        duration: "0s",
        trigger: {
          count: 1,
        },
        thresholdValue: 10, // > 10 per 5 minutes (higher than expected) will trigger an alert
      },
    },
  ],
  alertStrategy: {
    autoClose: "604800s",
  },
  combiner: "OR",
  enabled: true,
  notificationChannels: [notificationEmailId, notificationDiscordId],
});

const ALERT_POLICY_FIRESTORE_QUERIES = `${FUNCTION_NAME}-firestore-queries`;
const ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS = 5 * 60;
new gcp.monitoring.AlertPolicy(ALERT_POLICY_FIRESTORE_QUERIES, {
  displayName: ALERT_POLICY_FIRESTORE_QUERIES,
  conditions: [
    {
      displayName: `Firestore Read Activity > 10 / ${ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS / 60} minutes`,
      conditionThreshold: {
        filter: pulumi.interpolate`resource.type = "firestore_instance" AND resource.labels.project_id = "${gcp.config.project}" AND metric.type = "firestore.googleapis.com/document/read_count"`,
        aggregations: [
          {
            alignmentPeriod: `${ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS}s`,
            crossSeriesReducer: "REDUCE_NONE",
            perSeriesAligner: "ALIGN_SUM",
          },
        ],
        comparison: "COMPARISON_GT",
        duration: "0s",
        trigger: {
          count: 1,
        },
        thresholdValue: 10, // > 10 per 5 minutes (higher than expected) will trigger an alert
      },
    },
    {
      displayName: `Firestore Write Activity > 10 / ${ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS / 60} minutes`,
      conditionThreshold: {
        filter: pulumi.interpolate`resource.type = "firestore_instance" AND resource.labels.project_id = "${gcp.config.project}" AND metric.type = "firestore.googleapis.com/document/write_count"`,
        aggregations: [
          {
            alignmentPeriod: `${ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS}s`,
            crossSeriesReducer: "REDUCE_NONE",
            perSeriesAligner: "ALIGN_SUM",
          },
        ],
        comparison: "COMPARISON_GT",
        duration: "0s",
        trigger: {
          count: 1,
        },
        thresholdValue: 10, // > 10 per 5 minutes (higher than expected) will trigger an alert
      },
    },
  ],
  alertStrategy: {
    autoClose: "604800s",
  },
  combiner: "OR",
  enabled: true,
  notificationChannels: [notificationEmailId, notificationDiscordId],
});

/**
 * Create a dashboard for monitoring activity
 */
const DASHBOARD_NAME = `${FUNCTION_NAME_STACK}`;
new gcp.monitoring.Dashboard(
  DASHBOARD_NAME,
  {
    dashboardJson: pulumi.interpolate`
      {
        "category": "CUSTOM",
        "displayName": "${DASHBOARD_NAME}",
        "mosaicLayout": {
          "columns": 12,
          "tiles": [
            {
              "height": 4,
              "widget": {
                "title": "Function Executions per ${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                            "crossSeriesReducer": "REDUCE_SUM",
                            "groupByFields": [
                              "metric.label.status"
                            ],
                            "perSeriesAligner": "ALIGN_SUM"
                          },
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${functionSubgraphCheckName}\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
                        }
                      }
                    }
                  ],
                  "thresholds": [],
                  "timeshiftDuration": "0s",
                  "yAxis": {
                    "label": "y1Axis",
                    "scale": "LINEAR"
                  }
                }
              },
              "width": 6,
              "xPos": 0,
              "yPos": 0
            },
            {
              "height": 4,
              "widget": {
                "title": "Document Reads per ${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                            "crossSeriesReducer": "REDUCE_SUM",
                            "groupByFields": [
                              "metric.label.status"
                            ],
                            "perSeriesAligner": "ALIGN_SUM"
                          },
                          "filter": "resource.type = \\"firestore_instance\\" resource.labels.project_id = \\"${
                            gcp.config.project
                          }\\" metric.type = \\"firestore.googleapis.com/document/read_count\\""
                        }
                      }
                    }
                  ],
                  "thresholds": [],
                  "timeshiftDuration": "0s",
                  "yAxis": {
                    "label": "y1Axis",
                    "scale": "LINEAR"
                  }
                }
              },
              "width": 6,
              "xPos": 6,
              "yPos": 0
            },
            {
              "height": 4,
              "widget": {
                "title": "Document Writes per ${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                            "crossSeriesReducer": "REDUCE_SUM",
                            "groupByFields": [
                              "metric.label.status"
                            ],
                            "perSeriesAligner": "ALIGN_SUM"
                          },
                          "filter": "resource.type = \\"firestore_instance\\" resource.labels.project_id = \\"${
                            gcp.config.project
                          }\\" metric.type = \\"firestore.googleapis.com/document/write_count\\""
                        }
                      }
                    }
                  ],
                  "thresholds": [],
                  "timeshiftDuration": "0s",
                  "yAxis": {
                    "label": "y1Axis",
                    "scale": "LINEAR"
                  }
                }
              },
              "width": 6,
              "xPos": 0,
              "yPos": 4
            }
          ]
        }
      }`,
  },
  { dependsOn: [functionSubgraphCheck] },
);
export const dashboardName = DASHBOARD_NAME;
