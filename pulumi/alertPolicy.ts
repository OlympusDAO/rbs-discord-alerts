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
  const policyNameFunctionCrash = `${policyPrefix}-function-crash`;
  new gcp.monitoring.AlertPolicy(policyNameFunctionCrash, {
    displayName: policyNameFunctionCrash,
    conditions: [
      {
        displayName: "Function Crash",
        conditionMatchedLog: {
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionName}" AND SEARCH(textPayload, \"finished with status: 'crash'\")`,
          labelExtractors: {
            functionName: "EXTRACT(labels.function_name)",
            executionId: "EXTRACT(labels.execution_id)",
          },
        },
      },
    ],
    alertStrategy: {
      notificationRateLimit: {
        period: "3600s",
      },
      autoClose: "604800s",
    },
    combiner: "OR",
    enabled: true,
    notificationChannels: notificationChannels,
  });

  // Alert when functions time out
  const policyNameFunctionTimeout = `${policyPrefix}-function-timeout`;
  new gcp.monitoring.AlertPolicy(policyNameFunctionTimeout, {
    displayName: policyNameFunctionTimeout,
    conditions: [
      {
        displayName: "Function Timeout",
        conditionMatchedLog: {
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionName}" AND SEARCH(textPayload, \"finished with status: 'timeout'\")`,
          labelExtractors: {
            functionName: "EXTRACT(labels.function_name)",
            executionId: "EXTRACT(labels.execution_id)",
          },
        },
      },
    ],
    alertStrategy: {
      notificationRateLimit: {
        period: "3600s",
      },
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
