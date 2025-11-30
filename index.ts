import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

import { createAlertFunctionError, createAlertFunctionExecutions } from "./pulumi/alertPolicy";
import { createFunction } from "./pulumi/httpCallbackFunction";
import { performAuctionParametersUpdatedChecks } from "./src/handleAuctionParametersUpdated";
import { performAuctionResultChecks } from "./src/handleAuctionResult";
import { performBondMarketCreationFailedChecks } from "./src/handleBondMarketCreationFailed";
import { performFailedPeriodicTasksChecks } from "./src/handleFailedPeriodicTasks";
import { performHeartbeatChecks } from "./src/handleHeartbeat";
import { performEventChecks } from "./src/handlePriceEvents";
import { performSnapshotChecks } from "./src/handleSnapshotCheck";
import { performTargetPriceChangedCheck } from "./src/handleTargetPriceChangedEvents";
import { performYRFMarketChecks } from "./src/handleYRFMarkets";

const pulumiConfig = new pulumi.Config();

if (!gcp.config.project) {
  throw new Error("Set the project for the pulumi gcp provider");
}

if (!gcp.config.region) {
  throw new Error("Set the region for the pulumi gcp provider");
}

const CONFIG_DISCORD_ROLE_CORE = "discordRoleIdCore";
const CONFIG_CONTRACT = "contractUrl";
const SECRET_DISCORD_WEBHOOK_ALERT = "discordWebhookAlert";
const SECRET_DISCORD_WEBHOOK_ALERT_COMMUNITY = "discordWebhookAlertCommunity";
const SECRET_DISCORD_WEBHOOK_EMERGENCY = "discordWebhookEmergency";
const SECRET_NOTIFICATION_EMAIL = "notificationEmail";
const SECRET_NOTIFICATION_EMAIL_DISCORD = "notificationEmailDiscord";
const SECRET_GRAPHQL_API_KEY = "GRAPHQL_API_KEY";
const SECRET_CONVERTIBLE_DEPOSITS_SUBGRAPH_URL = "CONVERTIBLE_DEPOSITS_SUBGRAPH_URL";

const PROJECT_NAME = `${gcp.config.project}`;
const PROJECT_NAME_STACK = `${PROJECT_NAME}-${pulumi.getStack()}`;

const DEFAULT_MEMORY_MB = 256;
const DEFAULT_RUNTIME = "nodejs20";

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

const graphQlApiKey = pulumiConfig.requireSecret(SECRET_GRAPHQL_API_KEY);
const convertibleDepositsSubgraphUrl = pulumiConfig.requireSecret(SECRET_CONVERTIBLE_DEPOSITS_SUBGRAPH_URL);

/**
 * Target Price Changed Events
 */
const FUNCTION_TARGET_PRICE = "rbs-target-price-changed-events";
const FUNCTION_TARGET_PRICE_STACK = `${FUNCTION_TARGET_PRICE}-${pulumi.getStack()}`;

const [_functionTargetPriceChanged, functionTargetPriceChangedName] = createFunction(
  FUNCTION_TARGET_PRICE_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performTargetPriceChangedCheck(datastore.documentId.get(), datastore.collection.get(), [
      webhookAlertCommunity,
    ]);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    GRAPHQL_API_KEY: graphQlApiKey,
  },
  "*/5 * * * *", // Every 5 minutes
);

/**
 * Price Events
 */
const FUNCTION_PRICE_EVENTS = "rbs-price-events";
const FUNCTION_PRICE_EVENTS_STACK = `${FUNCTION_PRICE_EVENTS}-${pulumi.getStack()}`;

const [_functionPriceEvents, functionPriceEventsName] = createFunction(
  FUNCTION_PRICE_EVENTS_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performEventChecks(datastore.documentId.get(), datastore.collection.get(), [webhookAlertCommunity]);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    GRAPHQL_API_KEY: graphQlApiKey,
  },
  "* * * * *", // Every minute
);

/**
 * RBS Snapshot Checks
 */
const FUNCTION_SNAPSHOT_CHECK = "rbs-snapshot-check";
const FUNCTION_SNAPSHOT_CHECK_STACK = `${FUNCTION_SNAPSHOT_CHECK}-${pulumi.getStack()}`;

const [_functionSnapshotCheck, functionSnapshotCheckName] = createFunction(
  FUNCTION_SNAPSHOT_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performSnapshotChecks(
      datastore.documentId.get(),
      datastore.collection.get(),
      [pulumiConfig.require(CONFIG_DISCORD_ROLE_CORE)],
      webhookEmergency,
      pulumiConfig.get(CONFIG_CONTRACT),
    );
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    GRAPHQL_API_KEY: graphQlApiKey,
  },
  "* * * * *", // Every minute
);

/**
 * RBS Heartbeat Checks
 */
const FUNCTION_HEARTBEAT_CHECK = "rbs-heartbeat-check";
const FUNCTION_HEARTBEAT_CHECK_STACK = `${FUNCTION_HEARTBEAT_CHECK}-${pulumi.getStack()}`;

const [_functionHeartbeatCheck, functionHeartbeatCheckName] = createFunction(
  FUNCTION_HEARTBEAT_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performHeartbeatChecks(
      datastore.documentId.get(),
      datastore.collection.get(),
      [pulumiConfig.require(CONFIG_DISCORD_ROLE_CORE)],
      [webhookAlertCommunity],
    );
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    GRAPHQL_API_KEY: graphQlApiKey,
  },
  "* * * * *", // Every minute
);

/**
 * YRF Market Checks
 */
const FUNCTION_YRF_CHECK = "yrf-market-check";
const FUNCTION_YRF_CHECK_STACK = `${FUNCTION_YRF_CHECK}-${pulumi.getStack()}`;

const [_functionYRFCheck, functionYRFCheckName] = createFunction(
  FUNCTION_YRF_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performYRFMarketChecks(datastore.documentId.get(), datastore.collection.get(), webhookAlertCommunity);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    GRAPHQL_API_KEY: graphQlApiKey,
  },
  "* * * * *", // Every minute
);

/**
 * EmissionManager Market Checks
 *
 * Disabled - this is covered by the auction parameters updated check (and with greater detail)
 */
// const FUNCTION_EMISSION_MANAGER_CHECK = "emission-manager-market-check";
// const FUNCTION_EMISSION_MANAGER_CHECK_STACK = `${FUNCTION_EMISSION_MANAGER_CHECK}-${pulumi.getStack()}`;

// const [functionEmissionManagerCheck, functionEmissionManagerCheckName] = createFunction(
//   FUNCTION_EMISSION_MANAGER_CHECK_STACK,
//   FUNCTION_EXPIRATION_SECONDS,
//   DEFAULT_MEMORY_MB,
//   DEFAULT_RUNTIME,
//   async (_req, res) => {
//     console.log("Received callback. Initiating handler.");
//     await performEmissionManagerMarketChecks(
//       datastore.documentId.get(),
//       datastore.collection.get(),
//       webhookAlertCommunity,
//     );
//     // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (<any>res).send("OK").end();
//   },
//   {
//     GRAPHQL_API_KEY: graphQlApiKey,
//   },
//   "* * * * *", // Every minute
// );

/**
 * Failed Periodic Tasks Checks
 */
const FUNCTION_FAILED_PERIODIC_TASKS_CHECK = "failed-periodic-tasks-check";
const FUNCTION_FAILED_PERIODIC_TASKS_CHECK_STACK = `${FUNCTION_FAILED_PERIODIC_TASKS_CHECK}-${pulumi.getStack()}`;

const [_functionFailedPeriodicTasksCheck, functionFailedPeriodicTasksCheckName] = createFunction(
  FUNCTION_FAILED_PERIODIC_TASKS_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performFailedPeriodicTasksChecks(datastore.documentId.get(), datastore.collection.get(), webhookAlertDAO);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    CONVERTIBLE_DEPOSITS_SUBGRAPH_URL: convertibleDepositsSubgraphUrl,
  },
  "*/5 * * * *", // Every 5 minutes
);

/**
 * Bond Market Creation Failed Checks
 */
const FUNCTION_BOND_MARKET_CREATION_FAILED_CHECK = "bond-market-creation-failed-check";
const FUNCTION_BOND_MARKET_CREATION_FAILED_CHECK_STACK = `${FUNCTION_BOND_MARKET_CREATION_FAILED_CHECK}-${pulumi.getStack()}`;

const [_functionBondMarketCreationFailedCheck, functionBondMarketCreationFailedCheckName] = createFunction(
  FUNCTION_BOND_MARKET_CREATION_FAILED_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performBondMarketCreationFailedChecks(
      datastore.documentId.get(),
      datastore.collection.get(),
      webhookAlertDAO,
    );
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    CONVERTIBLE_DEPOSITS_SUBGRAPH_URL: convertibleDepositsSubgraphUrl,
  },
  "*/5 * * * *", // Every 5 minutes
);

/**
 * Auction Parameters Updated Checks
 */
const FUNCTION_AUCTION_PARAMETERS_UPDATED_CHECK = "auction-parameters-updated-check";
const FUNCTION_AUCTION_PARAMETERS_UPDATED_CHECK_STACK = `${FUNCTION_AUCTION_PARAMETERS_UPDATED_CHECK}-${pulumi.getStack()}`;

const [_functionAuctionParametersUpdatedCheck, functionAuctionParametersUpdatedCheckName] = createFunction(
  FUNCTION_AUCTION_PARAMETERS_UPDATED_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performAuctionParametersUpdatedChecks(
      datastore.documentId.get(),
      datastore.collection.get(),
      webhookAlertCommunity,
    );
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    CONVERTIBLE_DEPOSITS_SUBGRAPH_URL: convertibleDepositsSubgraphUrl,
  },
  "*/5 * * * *", // Every 5 minutes
);

/**
 * Auction Result Checks
 */
const FUNCTION_AUCTION_RESULT_CHECK = "auction-result-check";
const FUNCTION_AUCTION_RESULT_CHECK_STACK = `${FUNCTION_AUCTION_RESULT_CHECK}-${pulumi.getStack()}`;

const [_functionAuctionResultCheck, functionAuctionResultCheckName] = createFunction(
  FUNCTION_AUCTION_RESULT_CHECK_STACK,
  FUNCTION_EXPIRATION_SECONDS,
  DEFAULT_MEMORY_MB,
  DEFAULT_RUNTIME,
  async (_req, res) => {
    console.log("Received callback. Initiating handler.");
    await performAuctionResultChecks(datastore.documentId.get(), datastore.collection.get(), webhookAlertCommunity);
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
  {
    CONVERTIBLE_DEPOSITS_SUBGRAPH_URL: convertibleDepositsSubgraphUrl,
  },
  "*/5 * * * *", // Every 5 minutes
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

createAlertFunctionError(FUNCTION_YRF_CHECK_STACK, functionYRFCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_YRF_CHECK_STACK, functionYRFCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

// createAlertFunctionError(FUNCTION_EMISSION_MANAGER_CHECK_STACK, functionEmissionManagerCheckName, 60, [
//   notificationEmailId,
//   notificationDiscordId,
// ]);

// createAlertFunctionExecutions(FUNCTION_EMISSION_MANAGER_CHECK_STACK, functionEmissionManagerCheckName, 60, [
//   notificationEmailId,
//   notificationDiscordId,
// ]);

createAlertFunctionError(FUNCTION_FAILED_PERIODIC_TASKS_CHECK_STACK, functionFailedPeriodicTasksCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_FAILED_PERIODIC_TASKS_CHECK_STACK, functionFailedPeriodicTasksCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionError(
  FUNCTION_BOND_MARKET_CREATION_FAILED_CHECK_STACK,
  functionBondMarketCreationFailedCheckName,
  60,
  [notificationEmailId, notificationDiscordId],
);

createAlertFunctionExecutions(
  FUNCTION_BOND_MARKET_CREATION_FAILED_CHECK_STACK,
  functionBondMarketCreationFailedCheckName,
  60,
  [notificationEmailId, notificationDiscordId],
);

createAlertFunctionError(
  FUNCTION_AUCTION_PARAMETERS_UPDATED_CHECK_STACK,
  functionAuctionParametersUpdatedCheckName,
  60,
  [notificationEmailId, notificationDiscordId],
);

createAlertFunctionExecutions(
  FUNCTION_AUCTION_PARAMETERS_UPDATED_CHECK_STACK,
  functionAuctionParametersUpdatedCheckName,
  60,
  [notificationEmailId, notificationDiscordId],
);

createAlertFunctionError(FUNCTION_AUCTION_RESULT_CHECK_STACK, functionAuctionResultCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);

createAlertFunctionExecutions(FUNCTION_AUCTION_RESULT_CHECK_STACK, functionAuctionResultCheckName, 60, [
  notificationEmailId,
  notificationDiscordId,
]);
