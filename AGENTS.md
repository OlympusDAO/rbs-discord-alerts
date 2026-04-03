# RBS Discord Alerts - Development Guide

## Repository Overview

This project monitors OlympusDAO's Range-Bound Stability (RBS) system and sends automated Discord alerts when specific events occur or critical conditions are detected. It uses Pulumi for cloud infrastructure orchestration on Google Cloud Platform.

## Architecture

The system consists of:

- **Google Cloud Functions**: Serverless functions triggered by schedulers
- **Google Cloud Scheduler**: Triggers functions every minute with cron schedule `* * * * *`
- **Google Firestore**: NoSQL database for persistent state tracking
- **Google Cloud Monitoring**: Alert policies and dashboards
- **GraphQL Subgraphs**: Data sources via The Graph Protocol

## Core Functions and Their Purpose

### 1. Price Events Monitor (`handlePriceEvents.ts`)

- **Purpose**: Broadcasts RBS PriceEvents (WallUp, WallDown, CushionUp, CushionDown) to Discord
- **Data Source**: RBS Subgraph via `RbsPriceEventsDocument` query
- **State Tracking**: Stores latest processed block in Firestore field `events.latestBlock`
- **Alert Type**: Informational alerts to DAO and community channels

### 2. Snapshot Checks (`handleSnapshotCheck.ts`)

- **Purpose**: Monitors critical RBS conditions that could indicate emergencies
- **Checks**:
  - `checkLowerWall`: Price below 80% of historical lower wall price
  - `checkCapacity`: Cushion capacity depletion patterns
  - `checkBondMarkets`: Bond market creation/closure validation
  - `checkPrice`: (Currently disabled) Price discrepancies between sources
- **Alert Type**: Emergency alerts with role mentions
- **Throttling**: Built-in alert throttling to prevent spam

### 3. Heartbeat Monitor (`handleHeartbeat.ts`)

- **Purpose**: Tracks RBS heartbeat events and alerts on missed heartbeats
- **Frequency**: Expected every 8 hours with 10-minute threshold
- **State Tracking**: Stores latest block and beat date
- **Alert Conditions**: Late heartbeat (beyond threshold) triggers emergency alert

### 4. Target Price Changes (`handleTargetPriceChangedEvents.ts`)

- **Purpose**: Monitors and reports changes to RBS target price
- **Data Source**: RBS Subgraph for target price change events
- **Alert Type**: Informational alerts to DAO and community channels

### 5. YRF Market Monitor (`handleYRFMarkets.ts`)

- **Purpose**: Monitors Yield Repurchase Facility market creation and closure
- **Data Source**: YRF Subgraph for market events
- **Alert Type**: Community alerts for YRF activity

## Pulumi Infrastructure Patterns

### Function Creation Pattern

Functions are created using the `createFunction` helper in `pulumi/httpCallbackFunction.ts`:

```typescript
const [functionObject, functionName, triggerUrl] = createFunction(
  functionName,
  timeoutSeconds,
  memoryMB,
  runtime,
  handlerCallback,
  graphQlApiKey,
  cronSchedule // Optional - creates Cloud Scheduler job
);
```

### Configuration Management

- **Environment Variables**: Set via `environmentVariables` in function creation
- **Secrets**: Managed through Pulumi configuration (`pulumi.Config()`)
- **Required Secrets**:
  - `GRAPHQL_API_KEY`: The Graph API key for subgraph access
  - Discord webhook URLs for different alert types
  - Notification email addresses

### Alert Policy Creation

Two types of alert policies are automatically created for each function:

- **Function Errors**: `createAlertFunctionError` - monitors crashes and timeouts
- **Function Executions**: `createAlertFunctionExecutions` - monitors execution frequency

## GraphQL Integration

### Code Generation

- Uses `@graphql-codegen/cli` with configuration in `codegen.ts`
- Generates TypeScript types from GraphQL schemas
- Supports multiple subgraphs: RBS, Bonds, Price Snapshot, YRF

### Subgraph URLs (from `constants.ts`)

- **RBS Subgraph**: Primary data source for RBS events
- **Bonds Subgraph**: Bond market data
- **Price Snapshot Subgraph**: Price data and snapshots
- **YRF Subgraph**: Yield Repurchase Facility data

### Query Patterns

All GraphQL queries follow this pattern:

```typescript
const client = createGraphQLClient(getSubgraphUrl());
const queryResults = await client.query(DocumentQuery, variables).toPromise();
if (!queryResults.data) {
  throw new Error(`Query failed: ${queryResults.error}`);
}
```

## Discord Alert System

### Alert Types

1. **Informational**: Regular event notifications (Price events, heartbeats)
2. **Emergency**: Critical condition alerts with role mentions
3. **Community**: Lower-priority alerts for community channels

### Alert Structure

All alerts use embedded messages with structured fields:

```typescript
export type EmbedField = {
  name: string;
  value: string;
  inline?: boolean;
};
```

### Role Mentions

Emergency alerts can mention Discord roles using `getRoleMentions()` helper.

## State Management with Firestore

### Document Structure

State is stored in a single Firestore document per environment:

- Document ID: `{project-name}-{stack}` (e.g., "rbs-discord-alerts-dev")
- Collection: "default"

### Common State Fields

- `events.latestBlock`: Last processed block for price events
- `heartbeat.latestBlock`: Last processed block for heartbeat events
- `heartbeat.latestBeatDate`: Timestamp of last heartbeat
- `{functionKey}.lastAlertDate`: Throttling timestamps

## Development Workflow

### Adding New Functions/Endpoints

1. **Create Handler Function**:

   ```typescript
   // src/handleNewFeature.ts
   export const performNewFeatureChecks = async (
     firestoreDocumentPath: string,
     firestoreCollectionName: string,
     alertWebhookUrls: string[]
   ): Promise<void> => {
     // Implementation
   };
   ```

2. **Add to Pulumi Configuration**:

   ```typescript
   // index.ts
   const [functionNewFeature, functionNewFeatureName] = createFunction(
     "new-feature-check",
     FUNCTION_EXPIRATION_SECONDS,
     DEFAULT_MEMORY_MB,
     DEFAULT_RUNTIME,
     async (req, res) => {
       await performNewFeatureChecks(/* ... */);
       res.send("OK").end();
     },
     graphQlApiKey,
     "* * * * *" // Every minute
   );
   ```

3. **Add Alert Policies**:

   ```typescript
   createAlertFunctionError(functionName, functionNewFeatureName, 60, [
     notificationEmailId,
     notificationDiscordId,
   ]);

   createAlertFunctionExecutions(functionName, functionNewFeatureName, 60, [
     notificationEmailId,
     notificationDiscordId,
   ]);
   ```

### GraphQL Schema Updates

1. **Update GraphQL Files**:
   - Add new queries to `src/graphql/{schema}.graphql`
   - Update subgraph URLs in `constants.ts` if needed

2. **Regenerate Types**:

   ```bash
   yarn codegen
   ```

3. **Import Generated Types**:

   ```typescript
   import { NewQueryDocument, NewQueryResult } from "./graphql/schema";
   ```

## Testing

### Unit Tests

- Located in `src/__tests__/`
- Uses Jest with TypeScript support (`ts-jest`)
- Test individual checking functions

### Manual Testing

- CLI execution scripts in `package.json`:
  - `yarn execute:events`
  - `yarn execute:heartbeats`
  - `yarn execute:snapshots`
  - `yarn execute:targetPrice`
  - `yarn execute:yrfmarkets`

### Environment Variables for Testing

```bash
export $(cat .env | xargs)
```

## Code Quality and Standards

### ESLint Configuration

- TypeScript-first with strict rules
- Prettier integration for formatting
- Simple import sorting
- Unused imports removal

### TypeScript Configuration

- Strict mode enabled
- CommonJS modules
- ES2020 target
- Source maps for debugging

### Required Tools

- `yarn lint:fix`: Fix linting issues. It is recommended to run this after any code changes to ensure consistency.
- `yarn build`: TypeScript compilation. It is recommended to run this after any code changes to ensure accuracy.
- `yarn codegen`: GraphQL code generation. Run this after updating any `.graphql` files.

### Post-Change Checklist

After making any code changes, **always** run these commands in order:

1. `yarn codegen` - if you modified any GraphQL files
2. `yarn lint:fix` - to fix any linting issues and ensure code consistency
3. `yarn build` - to verify TypeScript compilation succeeds

This ensures code quality and catches any type errors or linting issues before committing changes.

## Deployment

### Environment Stacks

- **dev**: `yarn deploy:dev` or `pulumi up --stack dev`
- **prod**: `yarn deploy:prod` or `pulumi up --stack prod`

### Prerequisites

1. Set GCP project and region in Pulumi configuration
2. Configure required secrets in Pulumi
3. Ensure GraphQL API key is valid

### Monitoring

- Cloud Monitoring dashboards automatically created
- Alert policies for function health and execution patterns
- Firestore query monitoring with thresholds

## Important Implementation Notes

### Error Handling

- All GraphQL queries must check for `queryResults.data` existence
- Discord webhook rate limiting (429) is handled gracefully
- Functions must call `res.send("OK").end()` to prevent timeouts

### State Persistence

- Only update Firestore state after successful alert delivery
- Use block numbers for event processing checkpoints
- Implement throttling for emergency alerts to prevent spam

### Security

- Never commit secrets to repository
- Use Pulumi secret management for sensitive data
- GraphQL API keys are injected as environment variables

### Performance

- Functions have 30-second timeout limit
- 256MB memory allocation by default
- Firestore read/write limits are monitored

This guide provides the foundation for understanding and extending the RBS Discord Alerts system. Always follow existing patterns and ensure proper testing before deployment.
