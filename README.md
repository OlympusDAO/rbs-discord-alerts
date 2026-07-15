# RBS Discord Alerts

## Purpose

This project checks the state of RBS and sends alerts in Discord.

## Architecture

Pulumi is used to manage the infrastructure, which comprises of:

- Google Cloud Function: to query the subgraph and send Discord messages
- Google Cloud Scheduler: triggers the function every minute
- Google Firestore: simple, scalable, cheap database that supports JSON/key-values
- Alerts: sends notifications via email and Discord (using [Make](https://us1.make.com/126792/scenarios/463632/edit))
- Dashboards

## Checks

- Subgraph Check: PriceEvents
  1. Gets the latest block from Firestore
  2. Fetches all PriceEvent records from the [RBS subgraph](https://github.com/OlympusDAO/rbs-subgraph)
  3. Sends a message using a Discord webhook
  4. Updates the latest block in Firestore
- Snapshot Checks
  - Checks for conditions that would be considered an emergency:
    - Current price below the lower wall price
    - Chainlink and LP price differ
    - Cushion capacity is depleted too often
    - An RBS CushionUp event results in a bond market with incorrect parameters
    - An RBS CushionDown event results in the non-closure of the bond market
    - A bond market is created without a corresponding RBS CushionUp event
    - A bond market is closed without a corresponding RBS CushionDown event

To be implemented:

- Premature closure of a bond market
- WallUp/WallDown checks

## Secrets Management

Secrets are stored in Pulumi on a per-stack basis.

## Common Tasks

Install dependencies:

```bash
pnpm install
```

This repository uses pnpm configuration from `pnpm-workspace.yaml`, including the hoisted linker layout required by Pulumi's Node.js closure serialization. Do not move these settings back to `.npmrc`; npm and `npx` do not understand pnpm-only keys such as `minimumReleaseAge`, `strictDepBuilds`, `blockExoticSubdeps`, or `nodeLinker`.

Regenerate GraphQL types after editing `src/graphql/*.graphql` files:

```bash
pnpm run codegen
```

Run formatting and lint fixes:

```bash
pnpm run lint
```

Check TypeScript compilation:

```bash
pnpm run build
```

Run a monitor locally against values from `.env`:

```bash
pnpm run execute:events
pnpm run execute:heartbeats
pnpm run execute:snapshots
pnpm run execute:targetPrice
pnpm run execute:yrfmarkets
```

`.env` is used only by the local `execute:*` commands and GraphQL code generation. It is not read by `pnpm run build`, `pnpm run lint`, or Pulumi deployments. See `.env.sample` for the variables required by each local command; there are currently no optional `.env` variables.

## Deployment

Deployments are managed by Pulumi. The package scripts wrap the corresponding stack commands:

```bash
pnpm run deploy:dev
pnpm run deploy:prod
```

Equivalent Pulumi commands:

```bash
pulumi up --stack dev
pulumi up --stack prod
```

Before deploying, confirm the selected stack with `pulumi stack ls` or `pulumi stack select <stack>`, and verify that the required stack config is present:

```bash
pulumi config --stack dev
pulumi config --stack prod
```

Required stack config includes `gcp:project`, `gcp:region`, `GRAPHQL_API_KEY`, Discord webhook URLs (including `discordWebhookConvertibleDeposits`, `discordWebhookProtocolBuybacks`, and `discordWebhookProtocolRevenue`), notification emails, `discordRoleIdCore`, `contractUrl`, `CONVERTIBLE_DEPOSITS_SUBGRAPH_URL`, and `ETHEREUM_RPC_URL` (an archive-capable Ethereum RPC endpoint).

The dedicated webhook routing is:

- `discordWebhookConvertibleDeposits`: CD auction tuning and auction results
- `discordWebhookProtocolBuybacks`: YRF market creation and closure
- `discordWebhookProtocolRevenue`: convertible-deposit yield claims

Set the dedicated webhook values as Pulumi secrets for each stack before previewing or deploying:

```bash
export CONVERTIBLE_DEPOSITS_WEBHOOK_URL="..."
export PROTOCOL_BUYBACKS_WEBHOOK_URL="..."
pulumi config set --secret discordWebhookConvertibleDeposits "$CONVERTIBLE_DEPOSITS_WEBHOOK_URL" --stack dev
pulumi config set --secret discordWebhookProtocolBuybacks "$PROTOCOL_BUYBACKS_WEBHOOK_URL" --stack dev
pulumi config set --secret discordWebhookConvertibleDeposits "$CONVERTIBLE_DEPOSITS_WEBHOOK_URL" --stack prod
pulumi config set --secret discordWebhookProtocolBuybacks "$PROTOCOL_BUYBACKS_WEBHOOK_URL" --stack prod
```

### Ethereum RPC requirement

`ETHEREUM_RPC_URL` is required by the auction-parameters monitor. The endpoint must support historical `eth_call` requests because the monitor reads the Emission Manager configuration and `PRICE.getLastPrice()` at each auction-tuning event block. Reading exact-block values keeps delayed processing and historical replay consistent with the contract's activation logic.

Removing this required configuration would first require the Convertible Deposits subgraph to persist the complete historical activation context for every auction-tuning event:

- OHM price from `PRICE.getLastPrice()`
- Emission Manager supply, backing, base emission rate, minimum premium, and tick size
- Configured CD auctioneer address

Once those exact-block values are indexed and validated against historical events, the alert can calculate the approximate activation price using GraphQL data alone. The RPC client and `ETHEREUM_RPC_URL` Pulumi configuration can then be removed. Using the subgraph's mutable current Emission Manager entity is not sufficient because replayed events could be calculated with settings from a later block.

## How To Update Subgraph Versions

- Deploy a new version of `rbs-subgraph`
  - Ideally, test this tool against the version in Subgraph Studio before deploying to the Decentralized Network. In which case, replace `RBS_SUBGRAPH_URL` with the temporary GraphQL endpoint.
- Update the addresses and starting blocks in `operator.ts` and `heart.ts` corresponding to new `Operator` and `Heart` policy versions, respectively.
- Deploy to the dev environment: `pulumi up --stack dev`
- Check that it operates as expected
- Deploy to the prod environment: `pulumi up --stack prod`
