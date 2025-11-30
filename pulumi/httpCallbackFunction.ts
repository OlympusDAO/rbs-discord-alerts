import * as gcp from "@pulumi/gcp";
import type { HttpCallback } from "@pulumi/gcp/cloudfunctions";
import type * as pulumi from "@pulumi/pulumi";

export const scheduleJob = (
  name: string,
  cronSchedule: string,
  triggerUrl: pulumi.Output<string>,
  dependsOn: gcp.cloudfunctions.HttpCallbackFunction[],
): void => {
  new gcp.cloudscheduler.Job(
    name,
    {
      schedule: cronSchedule,
      timeZone: "UTC",
      httpTarget: {
        httpMethod: "GET",
        uri: triggerUrl,
      },
    },
    {
      dependsOn: dependsOn,
    },
  );
};

export const createFunction = (
  name: string,
  timeout: number,
  memoryMb: number,
  runtime: string,
  callback: HttpCallback,
  environmentVariables: Record<string, pulumi.Output<string>>,
  cronSchedule?: string,
): [gcp.cloudfunctions.HttpCallbackFunction, pulumi.Output<string>, pulumi.Output<string>] => {
  const newFunction = new gcp.cloudfunctions.HttpCallbackFunction(name, {
    runtime: runtime,
    timeout: timeout,
    availableMemoryMb: memoryMb,
    callback: callback,
    environmentVariables: environmentVariables,
  });

  if (cronSchedule) {
    scheduleJob(name, cronSchedule, newFunction.httpsTriggerUrl, [newFunction]);
  }

  return [newFunction, newFunction.function.name, newFunction.httpsTriggerUrl];
};
