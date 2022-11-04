# RBS Discord Alerts

## Purpose

This project checks the RBS subgraph for PriceEvents and sends an alert in Discord.

## Architecture

Pulumi is used to manage the infrastructure, which comprises of:

- Google Cloud Function: to query the subgraph and send Discord messages
- Google Cloud Scheduler: triggers the function every minute
- Google Firestore: simple, scalable, cheap database that supports JSON/key-values
- Alerts: sends notifications via email and Discord (using [Make](https://us1.make.com/126792/scenarios/463632/edit))
- Dashboards

## Procedure

1. Gets the latest block from Firestore
2. Fetches all PriceEvent records from the [RBS subgraph](https://github.com/OlympusDAO/rbs-subgraph)
3. Sends a message using a Discord webhook
4. Updates the latest block in Firestore
