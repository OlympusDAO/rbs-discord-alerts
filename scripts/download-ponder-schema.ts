import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import fetch from "cross-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PONDER_SCHEMA_URL =
  "https://raw.githubusercontent.com/OlympusDAO/convertible-deposits-subgraph/refs/heads/master/ponder.schema.ts";
const OUTPUT_DIR = path.join(__dirname, "../src/ponder");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "ponder.schema.ts");

async function downloadPonderSchema(): Promise<void> {
  console.log(`Downloading Ponder schema from ${PONDER_SCHEMA_URL}...`);

  try {
    const response = await fetch(PONDER_SCHEMA_URL);
    if (!response.ok) {
      throw new Error(`Failed to download schema: ${response.status} ${response.statusText}`);
    }

    const schemaContent = await response.text();

    // Ensure the directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Write the schema file
    fs.writeFileSync(OUTPUT_FILE, schemaContent, "utf-8");
    console.log(`Successfully downloaded Ponder schema to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error downloading Ponder schema:", error);
    process.exit(1);
  }
}

downloadPonderSchema();

