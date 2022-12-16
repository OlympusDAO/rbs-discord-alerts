import fetch from "cross-fetch";

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
  thread_name?: string;
};

const generateWebhookUrl = (webhook: string, threadId?: string): string => {
  return `${webhook}?wait=true${threadId ? `&thread_id=${threadId}` : ""}`;
};

/**
 *
 * @param webhook
 * @param content
 * @param threadId specify this parameter to send a message into a particular thread
 * @returns
 */
const executeWebhook = async (webhook: string, content: DiscordMessage, threadId?: string): Promise<void> => {
  console.log(`Sending request to Discord webhook: ${JSON.stringify(content, null, 2)}`);
  const response = await fetch(generateWebhookUrl(webhook), {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(`Discord response status: ${response.status}`);
  // Ignore rate-limiting
  if (response.status == 429) {
    console.log(`Rate-limited`);
    return;
  }

  if (!response.ok) {
    throw new Error(`Encountered error with Discord webhook: ${await response.text()}`);
  }

  console.log(`Successfully sent Discord message. Response: ${await response.text()}`);
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
 * @param thread specify the thread name to create (for forum channels only)
 */
export const sendAlert = async (
  webhook: string,
  content: string,
  title: string,
  description: string,
  fields: EmbedField[],
  footer?: string,
  timestamp?: string,
  thread?: string,
): Promise<void> => {
  await executeWebhook(webhook, {
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
    thread_name: thread,
  });
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
