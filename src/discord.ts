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
};

const executeWebhook = async (webhook: string, content: DiscordMessage): Promise<void> => {
  console.log(`Sending request to Discord webhook: ${JSON.stringify(content, null, 2)}`);
  const response = await fetch(webhook, {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Encountered error with Discord webhook: ${response.text()}`);
  }
};

export const BLANK_EMBED_FIELD = {
  name: "\u200B",
  value: "\u200B",
};

export const sendAlert = async (
  webhook: string,
  title: string,
  description: string,
  fields: EmbedField[],
  footer?: string,
  timestamp?: string,
): Promise<void> => {
  await executeWebhook(webhook, {
    content: "",
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
  });
};

export const sortPriceEmbeds = (fields: EmbedField[], ascending = true): EmbedField[] => {
  return fields.sort((a, b) => {
    const aValue = parseFloat(a.value.replace("$", ""));
    const bValue = parseFloat(b.value.replace("$", ""));

    return ascending ? aValue - bValue : bValue - aValue;
  });
};
