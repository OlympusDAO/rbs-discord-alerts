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

Required stack config includes `gcp:project`, `gcp:region`, `GRAPHQL_API_KEY`, Discord webhook URLs, notification emails, `discordRoleIdCore`, `contractUrl`, and `CONVERTIBLE_DEPOSITS_SUBGRAPH_URL`.

## How To Update Subgraph Versions

- Deploy a new version of `rbs-subgraph`
  - Ideally, test this tool against the version in Subgraph Studio before deploying to the Decentralized Network. In which case, replace `RBS_SUBGRAPH_URL` with the temporary GraphQL endpoint.
- Update the addresses and starting blocks in `operator.ts` and `heart.ts` corresponding to new `Operator` and `Heart` policy versions, respectively.
- Deploy to the dev environment: `pulumi up --stack dev`
- Check that it operates as expected
- Deploy to the prod environment: `pulumi up --stack prod`
