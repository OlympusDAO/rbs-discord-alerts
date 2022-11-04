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

export const sendAlert = async (
  webhook: string,
  title: string,
  description: string,
  fields: EmbedField[],
): Promise<void> => {
  await executeWebhook(webhook, {
    content: "",
    embeds: [
      {
        title: title,
        description: description,
        fields: fields,
      },
    ],
  });
};
