import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

import { createAlertFunctionError, createAlertFunctionExecutions } from "./pulumi/alertPolicy";
import { createFunction } from "./pulumi/httpCallbackFunction";
import { performHeartbeatChecks } from "./src/handleHeartbeat";
import { performEventChecks } from "./src/handlePriceEvents";
import { performSnapshotChecks } from "./src/handleSnapshotCheck";
import { performTargetPriceChangedCheck } from "./src/handleTargetPriceChangedEvents";

const pulumiConfig = new pulumi.Config();

if (!gcp.config.project) {
  throw new Error("Set the project for the pulumi gcp provider");
}

if (!gcp.config.region) {
  throw new Error("Set the region for the pulumi gcp provider");
}

const CONFIG_DISCORD_ROLE_COUNCIL = "discordRoleIdCouncil";
const CONFIG_DISCORD_ROLE_CORE = "discordRoleIdCore";
const CONFIG_CONTRACT = "contractUrl";
const SECRET_DISCORD_WEBHOOK_ALERT = "discordWebhookAlert";
const SECRET_DISCORD_WEBHOOK_ALERT_COMMUNITY = "discordWebhookAlertCommunity";
const SECRET_DISCORD_WEBHOOK_EMERGENCY = "discordWebhookEmergency";
const SECRET_NOTIFICATION_EMAIL = "notificationEmail";
const SECRET_NOTIFICATION_EMAIL_DISCORD = "notificationEmailDiscord";
const SECRET_GRAPHQL_API_KEY = "GRAPHQL_API_KEY";

const PROJECT_NAME = `${gcp.config.project}`;
const PROJECT_NAME_STACK = `${PROJECT_NAME}-${pulumi.getStack()}`;

const DEFAULT_MEMORY_MB = 256;
const DEFAULT_RUNTIME = "nodejs14";

// Create the KV store
const FIRESTORE_DOCUMENT_STACK = PROJECT_NAME_STACK;
const datastore = new gcp.firestore.Document(FIRESTORE_DOCUMENT_STACK, {
  collection: "default",
  documentId: FIRESTORE_DOCUMENT_STACK,
  fields: "",
});

export const datastoreId = datastore.id;

const FUNCTION_EXPIRATION_SECONDS = 30;

// Pull the secret into a const to work around: https://github.com/pulumi/pulumi/issues/11257
// Also use `require` instead of `requireSecret`, as requireSecret won't work
const webhookAlertDAO = pulumiConfig.require(SECRET_DISCORD_WEBHOOK_ALERT);
const webhookAlertCommunity = pulumiConfig.require(SECRET_DISCORD_WEBHOOK_ALERT_COMMUNITY);
const webhookEmergency = pulumiConfig.require(SECRET_DISCORD_WEBHOOK_EMERGENCY);

const functionEnvironmentVariables = {
  GRAPHQL_API_KEY: pulumiConfig.requireSecret(SECRET_GRAPHQL_API_KEY).get(),
};

/**
 * Target Price Changed Events
 */
const FUNCTION_TARGET_PRICE = "rbs-target-price-changed-events";
const FUNCTION_TARGET_PRICE_STACK = `${FUNCTION_TARGET_PRICE}-${pulumi.getStack()}`;

const [functionTargetPriceChanged, functionTargetPriceChangedName] = createFunction(
  FUNCTION_TARGET_PRICE_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (req, res) => {
    console.log("Received callback. Initiating handler.");
    await performTargetPriceChangedCheck(datastore.documentId.get(), datastore.collection.get(), [
      webhookAlertDAO,
      webhookAlertCommunity,
    ]);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  functionEnvironmentVariables,
  "* * * * *", // Every minute
);

/**
 * Price Events
 */
const FUNCTION_PRICE_EVENTS = "rbs-price-events";
const FUNCTION_PRICE_EVENTS_STACK = `${FUNCTION_PRICE_EVENTS}-${pulumi.getStack()}`;

const [functionPriceEvents, functionPriceEventsName] = createFunction(
  FUNCTION_PRICE_EVENTS_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (req, res) => {
    console.log("Received callback. Initiating handler.");
    await performEventChecks(datastore.documentId.get(), datastore.collection.get(), [
      webhookAlertDAO,
      webhookAlertCommunity,
    ]);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  functionEnvironmentVariables,
  "* * * * *", // Every minute
);

/**
 * RBS Snapshot Checks
 */
const FUNCTION_SNAPSHOT_CHECK = "rbs-snapshot-check";
const FUNCTION_SNAPSHOT_CHECK_STACK = `${FUNCTION_SNAPSHOT_CHECK}-${pulumi.getStack()}`;

const [functionSnapshotCheck, functionSnapshotCheckName] = createFunction(
  FUNCTION_SNAPSHOT_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (req, res) => {
    console.log("Received callback. Initiating handler.");
    await performSnapshotChecks(
      datastore.documentId.get(),
      datastore.collection.get(),
      [pulumiConfig.require(CONFIG_DISCORD_ROLE_COUNCIL), pulumiConfig.require(CONFIG_DISCORD_ROLE_CORE)],
      webhookEmergency,
      pulumiConfig.get(CONFIG_CONTRACT),
    );
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  functionEnvironmentVariables,
  "* * * * *", // Every minute
);

/**
 * RBS Heartbeat Checks
 */
const FUNCTION_HEARTBEAT_CHECK = "rbs-heartbeat-check";
const FUNCTION_HEARTBEAT_CHECK_STACK = `${FUNCTION_HEARTBEAT_CHECK}-${pulumi.getStack()}`;

const [functionHeartbeatCheck, functionHeartbeatCheckName] = createFunction(
  FUNCTION_HEARTBEAT_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (req, res) => {
    console.log("Received callback. Initiating handler.");
    await performHeartbeatChecks(datastore.documentId.get(), datastore.collection.get(), [
      webhookAlertDAO,
      webhookAlertCommunity,
    ]);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  functionEnvironmentVariables,
  "* * * * *", // Every minute
);

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

createAlertFunctionError(FUNCTION_TARGET_PRICE_STACK, functionTargetPriceChangedName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_TARGET_PRICE_STACK, functionTargetPriceChangedName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionError(FUNCTION_PRICE_EVENTS_STACK, functionPriceEventsName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_PRICE_EVENTS_STACK, functionPriceEventsName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionError(FUNCTION_SNAPSHOT_CHECK_STACK, functionSnapshotCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_SNAPSHOT_CHECK_STACK, functionSnapshotCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionError(FUNCTION_HEARTBEAT_CHECK_STACK, functionHeartbeatCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_HEARTBEAT_CHECK_STACK, functionHeartbeatCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

// One alert for all functions (as it can't be filtered further)
const ALERT_POLICY_FIRESTORE_QUERIES = `${PROJECT_NAME_STACK}-firestore-queries`;
const ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS = 5 * 60;
const FIRESTORE_WRITE_PER_WINDOW = 15;
const FIRESTORE_READ_PER_WINDOW = 100;

new gcp.monitoring.AlertPolicy(ALERT_POLICY_FIRESTORE_QUERIES, {
  displayName: ALERT_POLICY_FIRESTORE_QUERIES,
  conditions: [
    {
      displayName: `Firestore Read Activity > ${FIRESTORE_READ_PER_WINDOW} / ${
        ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS / 60
      } minutes`,
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
        thresholdValue: FIRESTORE_READ_PER_WINDOW, // > FIRESTORE_READ_PER_WINDOW per 5 minutes (higher than expected) will trigger an alert
      },
    },
    {
      displayName: `Firestore Write Activity > ${FIRESTORE_WRITE_PER_WINDOW} / ${
        ALERT_POLICY_FIRESTORE_QUERIES_WINDOW_SECONDS / 60
      } minutes`,
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
        thresholdValue: FIRESTORE_WRITE_PER_WINDOW, // > FIRESTORE_WRITE_PER_WINDOW per 5 minutes (higher than expected) will trigger an alert
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
                "title": "${FUNCTION_PRICE_EVENTS} Function Executions per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
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
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${functionPriceEventsName}\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
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
                "title": "${FUNCTION_SNAPSHOT_CHECK} Function Executions per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
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
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${functionSnapshotCheckName}\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
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
                "title": "${FUNCTION_HEARTBEAT_CHECK} Function Executions per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
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
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${functionHeartbeatCheckName}\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
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
                "title": "${FUNCTION_TARGET_PRICE} Function Executions per ${DASHBOARD_WINDOW_SECONDS / 60} minutes",
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
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${functionTargetPriceChangedName}\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
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
              "yPos": 8
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
              "yPos": 8
            }
          ]
        }
      }`,
  },
  { dependsOn: [functionPriceEvents, functionSnapshotCheck, functionHeartbeatCheck, functionTargetPriceChanged] },
);
export const dashboardName = DASHBOARD_NAME;
