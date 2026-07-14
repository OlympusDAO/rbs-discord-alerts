import fetch from "cross-fetch";

import { createRetryBudget, type RetryBudget, retryWithBackoff } from "./helpers/retryHelper";

export type EmbedField = {
  name: string;
  value: string;
  inline?: boolean;
};

type Embed = {
  title: string;
  description: string;
  fields?: EmbedField[];
  footer?: {
    text?: string;
  };
  timestamp?: string;
};

type DiscordMessage = {
  /**
   * Text content displayed above any embeds.
   */
  content: string;
  embeds: Embed[];
};

type WebhookAttempt = {
  success: boolean;
  retryAfterMs?: number;
};

const MAX_WEBHOOK_ATTEMPTS = 3;
const MAX_WEBHOOK_RETRY_BUDGET_MS = 10_000;

export const createDiscordRetryBudget = (): RetryBudget => createRetryBudget(MAX_WEBHOOK_RETRY_BUDGET_MS);

const getRetryAfterMs = (body: unknown): number | undefined => {
  if (typeof body !== "object" || body === null || !("retry_after" in body)) return undefined;

  const retryAfterSeconds = Number(body.retry_after);
  if (!Number.isFinite(retryAfterSeconds) || retryAfterSeconds < 0) return undefined;

  return retryAfterSeconds * 1000;
};

const executeWebhookAttempt = async (webhook: string, content: DiscordMessage): Promise<WebhookAttempt> => {
  console.log(`Sending request to Discord webhook: ${JSON.stringify(content, null, 2)}`);
  const response = await fetch(webhook, {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.debug(`Discord response status: ${response.status}`);
  if (response.status === 429) {
    console.error(`Rate-limited by Discord`);
    const body = await response.json();
    console.error(`Discord response: ${JSON.stringify(body)}`);

    return { success: false, retryAfterMs: getRetryAfterMs(body) };
  }

  if (!response.ok) {
    throw new Error(`Encountered error with Discord webhook: ${await response.text()}`);
  }

  return { success: true };
};

const executeWebhook = async (webhook: string, content: DiscordMessage, retryBudget: RetryBudget): Promise<boolean> => {
  const result = await retryWithBackoff(() => executeWebhookAttempt(webhook, content), {
    maxAttempts: MAX_WEBHOOK_ATTEMPTS,
    maxTotalDelayMs: MAX_WEBHOOK_RETRY_BUDGET_MS,
    getRetryDelayMs: attempt => attempt.retryAfterMs,
    sharedBudget: retryBudget,
  });

  return result.success;
};

export const BLANK_EMBED_FIELD = {
  name: "\u200B",
  value: "\u200B",
};

/**
 * Sends an alert using a Discord webhook.
 *
 * Mentions are not parsed within embeds, so any role/user mentions should be contained
 * within the `content` parameter.
 *
 * @param webhook
 * @param content
 * @param title
 * @param description
 * @param fields
 * @param footer
 * @param timestamp
 * @param retryBudget
 */
export const sendAlert = async (
  webhook: string,
  content: string,
  title: string,
  description: string,
  fields: EmbedField[],
  footer?: string,
  timestamp?: string,
  retryBudget: RetryBudget = createDiscordRetryBudget(),
): Promise<boolean> => {
  return await executeWebhook(
    webhook,
    {
      content: content,
      embeds: [
        {
          title: title,
          description: description,
          fields: fields,
          footer: {
            text: footer,
          },
          timestamp: timestamp,
        },
      ],
    },
    retryBudget,
  );
};

export const sortPriceEmbeds = (fields: EmbedField[], ascending = true): EmbedField[] => {
  return fields.sort((a, b) => {
    const aValue = parseFloat(a.value.replace("$", ""));
    const bValue = parseFloat(b.value.replace("$", ""));

    return ascending ? aValue - bValue : bValue - aValue;
  });
};

export const getRoleMention = (role: string): string => {
  return `<@&${role}>`;
};

/**
 * Generates Discord role mentions in the correct syntax.
 *
 * Passing in an array with two role IDs will result in:
 * "<@&1111> <@&2222>"
 *
 * @param roles
 * @returns
 */
export const getRoleMentions = (roles: string[]): string => {
  if (roles.length === 0) {
    return "";
  }

  return roles.reduce((previousValue, currentValue) => {
    return `${previousValue} ${getRoleMention(currentValue)}`;
  }, "");
};

/**
 * Display in the local user's timezone
 *
 * @param timestampMilliseconds
 * @returns
 */
export const getRelativeTimestamp = (timestampMilliseconds: number): string => {
  return `<t:${timestampMilliseconds / 1000}>`;
};
