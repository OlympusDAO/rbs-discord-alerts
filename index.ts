import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

import { createAlertFunctionError, createAlertFunctionExecutions } from "./pulumi/alertPolicy";
import { handleEvents } from "./src/handleEvents";
import { handleSnapshots } from "./src/handleSnapshots";

const pulumiConfig = new pulumi.Config();

if (!gcp.config.project) {
  throw new Error("Set the project for the pulumi gcp provider");
}

if (!gcp.config.region) {
  throw new Error("Set the region for the pulumi gcp provider");
}

const SECRET_DISCORD_WEBHOOK_ALERT = "discordWebhookAlert";
const SECRET_DISCORD_WEBHOOK_EMERGENCY = "discordWebhookEmergency";
const SECRET_NOTIFICATION_EMAIL = "notificationEmail";
const SECRET_NOTIFICATION_EMAIL_DISCORD = "notificationEmailDiscord";

const PROJECT_NAME = `${gcp.config.project}`;
const PROJECT_NAME_STACK = `${PROJECT_NAME}-${pulumi.getStack()}`;

// Create the KV store
const FIRESTORE_DOCUMENT_STACK = PROJECT_NAME_STACK;
const datastore = new gcp.firestore.Document(FIRESTORE_DOCUMENT_STACK, {
  collection: "default",
  documentId: FIRESTORE_DOCUMENT_STACK,
  fields: "",
});

export const datastoreId = datastore.id;

const FUNCTION_EXPIRATION_SECONDS = 30;

/**
 * RBS Subgraph Checks
 */
const FUNCTION_SUBGRAPH_CHECK = "rbs-subgraph-check";
const FUNCTION_SUBGRAPH_CHECK_STACK = `${FUNCTION_SUBGRAPH_CHECK}-${pulumi.getStack()}`;

// Pull the secret into a const to work around: https://github.com/pulumi/pulumi/issues/11257
// Also use `require` instead of `requireSecret`, as requireSecret won't work
const webhookSubgraphCheck = pulumiConfig.require(SECRET_DISCORD_WEBHOOK_ALERT);
const functionSubgraphCheck = new gcp.cloudfunctions.HttpCallbackFunction(FUNCTION_SUBGRAPH_CHECK_STACK, {
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

// Scheduling
const schedulerJobSubgraphCheck = new gcp.cloudscheduler.Job(
  FUNCTION_SUBGRAPH_CHECK_STACK,
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

export const schedulerJobSubgraphCheckName = schedulerJobSubgraphCheck.name;

/**
 * RBS Emergency Alerts
 */
const FUNCTION_EMERGENCY = "rbs-emergency";
const FUNCTION_EMERGENCY_STACK = `${FUNCTION_EMERGENCY}-${pulumi.getStack()}`;

// Pull the secret into a const to work around: https://github.com/pulumi/pulumi/issues/11257
// Also use `require` instead of `requireSecret`, as requireSecret won't work
const webhookEmergency = pulumiConfig.require(SECRET_DISCORD_WEBHOOK_EMERGENCY);
const functionEmergency = new gcp.cloudfunctions.HttpCallbackFunction(FUNCTION_EMERGENCY_STACK, {
  runtime: "nodejs14",
  timeout: FUNCTION_EXPIRATION_SECONDS,
  availableMemoryMb: 128,
  callback: async (req, res) => {
    console.log("Received callback. Initiating handler.");
    await handleSnapshots(datastore.documentId.get(), datastore.collection.get(), [], webhookEmergency);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
});

export const functionEmergencyName = functionEmergency.function.name;
export const functionEmergencyUrl = functionEmergency.httpsTriggerUrl;

// Scheduling
const schedulerJobEmergency = new gcp.cloudscheduler.Job(
  FUNCTION_EMERGENCY_STACK,
  {
    schedule: "* * * * *", // Every minute (the minimum)
    timeZone: "UTC",
    httpTarget: {
      httpMethod: "GET",
      uri: functionEmergencyUrl,
    },
  },
  {
    dependsOn: [functionEmergency],
  },
);

export const schedulerJobEmergencyName = schedulerJobEmergency.name;

/**
 * Create Alert Policies
 */
// Email notification channel
const notificationEmail = new gcp.monitoring.NotificationChannel("email", {
  displayName: "Email",
  type: "email",
  labels: {
    email_address: pulumiConfig.requireSecret(SECRET_NOTIFICATION_EMAIL),
  },
});
export const notificationEmailId = notificationEmail.id;

// Discord notification channel (via Make & email)
const notificationDiscord = new gcp.monitoring.NotificationChannel("discord", {
  displayName: "discord",
  type: "email",
  labels: {
    email_address: pulumiConfig.requireSecret(SECRET_NOTIFICATION_EMAIL_DISCORD),
  },
});
export const notificationDiscordId = notificationDiscord.id;

createAlertFunctionError(FUNCTION_SUBGRAPH_CHECK_STACK, functionSubgraphCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_SUBGRAPH_CHECK_STACK, functionSubgraphCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionError(FUNCTION_EMERGENCY_STACK, functionEmergencyName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_EMERGENCY_STACK, functionEmergencyName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

// One alert for all functions (as it can't be filtered further)
const ALERT_POLICY_FIRESTORE_QUERIES = `${PROJECT_NAME_STACK}-firestore-queries`;
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
const DASHBOARD_NAME = PROJECT_NAME_STACK;
const DASHBOARD_WINDOW_SECONDS = 5 * 60;
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
                "title": "${FUNCTION_SUBGRAPH_CHECK} Function Executions per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
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
                "title": "${FUNCTION_EMERGENCY} Function Executions per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
                            "crossSeriesReducer": "REDUCE_SUM",
                            "groupByFields": [
                              "metric.label.status"
                            ],
                            "perSeriesAligner": "ALIGN_SUM"
                          },
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${functionEmergencyName}\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
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
                "title": "Document Reads per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
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
              "xPos": 0,
              "yPos": 4
            },
            {
              "height": 4,
              "widget": {
                "title": "Document Writes per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${DASHBOARD_WINDOW_SECONDS}s",
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
              "xPos": 6,
              "yPos": 4
            }
          ]
        }
      }`,
  },
  { dependsOn: [functionSubgraphCheck, functionEmergency] },
);
export const dashboardName = DASHBOARD_NAME;
