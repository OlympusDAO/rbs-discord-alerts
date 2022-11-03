import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import { handler } from "./src/handler";

// Create the KV store
const DOCUMENT_NAME = "rbs-discord-alerts";
const datastore = new gcp.firestore.Document(DOCUMENT_NAME, {
  collection: "default",
  documentId: DOCUMENT_NAME,
  fields: "{\"lastBlock\": \"string_value\"}",
}) // TODO not working

export const datastoreId = datastore.id;

/**
 * Execution: Google Cloud Functions
 */
const FUNCTION_EXPIRATION_SECONDS = 30;
const FUNCTION_NAME = "rbs-discord-alerts";
const functionSubgraphCheck = new gcp.cloudfunctions.HttpCallbackFunction(FUNCTION_NAME, {
  runtime: "nodejs14",
  timeout: FUNCTION_EXPIRATION_SECONDS,
  availableMemoryMb: 128,
  callback: async (req, res) => {
    console.log("Received callback. Initiating handler.");
    await handler();
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
  const schedulerJob = new gcp.cloudscheduler.Job(FUNCTION_NAME, {
  schedule: "* * * * *", // Every minute
  timeZone: "UTC",
  httpTarget: {
    httpMethod: "GET",
    uri: functionSubgraphCheckUrl,
  },
}, {
  dependsOn: [functionSubgraphCheck],
});

export const schedulerJobName = schedulerJob.name;
