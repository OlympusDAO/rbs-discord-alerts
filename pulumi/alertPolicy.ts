import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

export const createAlertFunctionError = (
  policyPrefix: string,
  functionName: pulumi.Input<string>,
  executionFrequencySeconds: number,
  notificationChannels: pulumi.Input<pulumi.Input<string>[]>,
): void => {
  const alertWindowSeconds = 5 * executionFrequencySeconds;

  // Alert when functions crash
  const policyNameFunctionError = `${policyPrefix}-function-error`;
  new gcp.monitoring.AlertPolicy(policyNameFunctionError, {
    displayName: policyNameFunctionError,
    conditions: [
      {
        displayName: "Function Status Not OK",
        conditionThreshold: {
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionName}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count" AND metric.labels.status != "ok"`,
          aggregations: [
            {
              alignmentPeriod: `${alertWindowSeconds}s`,
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
    notificationChannels: notificationChannels,
  });
};

export const createAlertFunctionExecutions = (
  policyPrefix: string,
  functionName: pulumi.Input<string>,
  executionFrequencySeconds: number,
  notificationChannels: pulumi.Input<pulumi.Input<string>[]>,
): void => {
  const alertWindowSeconds = 5 * executionFrequencySeconds;
  const policyNameFunctionExecutions = `${policyPrefix}-function-executions`;
  new gcp.monitoring.AlertPolicy(policyNameFunctionExecutions, {
    displayName: policyNameFunctionExecutions,
    conditions: [
      {
        displayName: `Function Executions > 5 / ${alertWindowSeconds / 60} minutes`,
        conditionThreshold: {
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionName}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count"`,
          aggregations: [
            {
              alignmentPeriod: `${alertWindowSeconds}s`,
              crossSeriesReducer: "REDUCE_NONE",
              perSeriesAligner: "ALIGN_SUM",
            },
          ],
          comparison: "COMPARISON_GT",
          duration: "0s",
          trigger: {
            count: 1,
          },
          thresholdValue: 10, // > 10 per executionFrequencySeconds (higher than expected) will trigger an alert
        },
      },
    ],
    alertStrategy: {
      autoClose: "604800s",
    },
    combiner: "OR",
    enabled: true,
    notificationChannels: notificationChannels,
  });
};
