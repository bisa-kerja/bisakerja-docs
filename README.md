# Bisakerja Docs

Central documentation hub for the Bisakerja platform. This repository hosts the platform-level narrative, cross-service references, operational guidance, and documentation standards that make the overall system easier to understand and maintain.

The site is built with Docusaurus and published for use as the primary entry point before readers move into service-specific repositories and synchronized technical docs.

## Table of Contents

- [Overview](#overview)
- [Platform Context](#platform-context)
- [Service Boundaries](#service-boundaries)
- [User-Facing Flows](#user-facing-flows)
- [What Lives Here](#what-lives-here)
- [Documentation Map](#documentation-map)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Bash And Bun Workflow](#bash-and-bun-workflow)
- [Search Configuration](#search-configuration)
- [Available Scripts](#available-scripts)
- [Content Model](#content-model)
- [Contribution Guide](#contribution-guide)
- [Deployment Notes](#deployment-notes)

## Overview

Bisakerja is positioned as an AI-powered career decision engine for job seekers in Indonesia. This documentation repository explains the platform from the system level and keeps the documentation model consistent as more services and contributors are added.

This repo is responsible for:

- Platform overview and onboarding material
- Architecture, data flow, and cross-service understanding
- Shared operational references
- Documentation standards, governance, and review rules
- Service landing pages that route to synchronized service documentation

It is not intended to replace the source-of-truth technical documentation that belongs inside each service repository.

## Platform Context

Bisakerja is not documented as a generic job board. The current documentation frames it as a decision layer for Indonesian job seekers who need clearer signals before applying.

The product problem is centered on:

- Fragmented job discovery across multiple hiring platforms
- Limited visibility into job-to-user fit before applying
- Weak feedback loops for improving skills, preferences, and application strategy

The platform answer combines aggregated job data, profile and preference context, fit scoring, explainable recommendations, skill gap analysis, and application tracking.

## Service Boundaries

The platform is currently described as a four-service web platform with PostgreSQL as the shared application data layer:

| Service     | Responsibility                                                                 | Documentation Entry                   |
| ----------- | ------------------------------------------------------------------------------ | ------------------------------------- |
| Frontend UI | Presents job discovery, fit analysis, preferences, and application tracking    | `docs/services/frontend-ui/index.mdx` |
| Backend API | Owns auth, business workflows, persistence, and cross-service orchestration    | `docs/services/backend-api/index.mdx` |
| Scraper API | Collects external job data and normalizes it into platform-owned job records   | `docs/services/scraper-api/index.mdx` |
| Model API   | Produces fit scores, explanation breakdowns, skill gaps, and recommendations   | `docs/services/model-api/index.mdx`   |
| PostgreSQL  | Stores user state, normalized jobs, preferences, fit outputs, and applications | `docs/overview/database-overview.mdx` |

The Backend API is the main orchestrator. The frontend talks to the backend, the backend prepares context for the Model API, and scraper-managed job data becomes usable only after normalization and persistence.

## User-Facing Flows

The overview documentation now connects architecture to concrete product flows:

- Job ingestion moves external listings through the Scraper API into normalized records.
- Job discovery lets guests or authenticated users search and filter available roles.
- Fit scoring combines user profile, preferences, and job attributes before invoking the Model API.
- Skill gap analysis explains weaker or missing capabilities in user-facing terms.
- Application tracking stores user-specific progress such as applied, interview, rejected, or other tracked states.

## What Lives Here

The repository currently covers five major documentation domains:

| Area              | Purpose                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `docs/overview`   | Product context, architecture, service interactions, data flow, onboarding paths, and glossary |
| `docs/services`   | Landing pages for Frontend UI, Backend API, Scraper API, and Model API                         |
| `docs/operations` | Environment, deployment, failure, and documentation-platform operational guidance              |
| `docs/standards`  | Ownership, structure, metadata, contribution, review, lifecycle, and governance rules          |
| `docs/references` | Shared reference material such as domain entities and integrations                             |

Supporting project files include:

- `docusaurus.config.ts` for site configuration and published URL settings
- `sidebars.ts` for documentation navigation
- `src/` for the Docusaurus homepage and theme-level customizations
- `.env.example` for optional Algolia DocSearch environment variables
- `package.json` for Docusaurus, validation, and formatting scripts
- `bun.lock` for Bun-managed dependency locking

## Documentation Map

If you are new to the repository, use this reading order:

1. Start with `docs/intro.mdx` for the central documentation hub overview.
2. Continue to `docs/overview/start-here.mdx` for the guided onboarding path.
3. Use `docs/overview/` for platform understanding and system context.
4. Use `docs/services/` to choose the correct service boundary.
5. Use `docs/standards/` before changing structure, ownership, or contribution workflows.
6. Use `docs/operations/` for deployment and incident-oriented references.

The current top-level sidebar is organized into:

- Overview
- Services
- Operations
- Standards
- References

## Tech Stack

- Docusaurus 3
- TypeScript
- React 19
- Bun
- ESLint
- Prettier

Runtime requirement:

- Node.js `>=20.0`
- Bun installed locally or in CI

## Getting Started

This repository uses Bash-style command examples and Bun as the package manager reference.

Install dependencies:

```bash
bun install
```

Start the local development server:

```bash
bun run start
```

Create a production build:

```bash
bun run build
```

The local dev server supports live reload, so most documentation and UI changes appear without restarting the process.

## Bash And Bun Workflow

Use Bash-compatible commands for local setup and documentation workflows:

- Use Bun for install, script execution, and dependency locking.
- Prefer path examples such as `./docs/overview`.
- Keep generated dependency changes aligned with `bun.lock`.
- Use `package.json` scripts as the source of available project commands.

Quick verification for the expected toolchain:

```bash
bun --version
node --version
```

## Search Configuration

This site uses Algolia's recommended DocSearch Docusaurus adapter for search and Agent Studio-powered Ask AI.

The adapter is registered through `@docsearch/docusaurus-adapter`, and search is configured under `themeConfig.docsearch` in `docusaurus.config.ts`. Do not add a separate `themeConfig.algolia` block because the adapter treats `docsearch` as the canonical key and rejects duplicate search config sources.

The search UI is enabled only when all three Algolia values are present in a local `.env` file:

- `DOCSEARCH_APP_ID`
- `DOCSEARCH_API_KEY`
- `DOCSEARCH_INDEX_NAME`

If any of these values are missing, the site still builds normally and the search bar stays hidden.

The DocSearch adapter plugin is registered only when these required values are available. This keeps CI and preview builds working even when search credentials are not injected.

Algolia Agent Studio Ask AI is enabled on top of DocSearch when this optional value is also present:

- `DOCSEARCH_ASK_AI_ASSISTANT_ID`

Suggested questions for Ask AI are disabled by default. Enable them only after Algolia has created the managed suggested-questions index:

- `DOCSEARCH_ASK_AI_SUGGESTED_QUESTIONS=true`

### Local Setup

Copy the example file, then fill in your Algolia DocSearch values:

```bash
cp .env.example .env
```

Use this content in `.env`:

```dotenv
DOCSEARCH_APP_ID=YOUR_APP_ID
DOCSEARCH_API_KEY=YOUR_SEARCH_API_KEY
DOCSEARCH_INDEX_NAME=YOUR_INDEX_NAME
DOCSEARCH_ASK_AI_ASSISTANT_ID=YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID
DOCSEARCH_ASK_AI_SUGGESTED_QUESTIONS=false
```

After `.env` is populated, start the dev server:

```bash
bun run start
```

For a production build:

```bash
bun run build
```

### Netlify Setup

For local development, the Docusaurus config reads values from `.env`.

For Netlify, configure the same values as environment variables in the site dashboard:

1. Open the site dashboard.
2. Go to `Site configuration` -> `Environment variables`.
3. Add `DOCSEARCH_APP_ID`, `DOCSEARCH_API_KEY`, and `DOCSEARCH_INDEX_NAME`.
4. Add `DOCSEARCH_ASK_AI_ASSISTANT_ID` when the Algolia index has an Ask AI assistant enabled.
5. Trigger a new deploy after saving the values.

### Ask AI Setup

Ask AI uses Agent Studio and the same Algolia DocSearch index when `DOCSEARCH_ASK_AI_ASSISTANT_ID` is configured.

The Docusaurus config passes the assistant ID, app ID, search API key, and index name through `themeConfig.docsearch.askAi`. The config also sets `agentStudio: true` and enables the DocSearch side panel so chat requests use the Agent Studio backend instead of the legacy Ask AI backend.

Before enabling it in production:

1. Confirm the DocSearch index has been crawled successfully.
2. Create or connect an Agent Studio assistant for the index in Algolia.
3. Store the assistant ID in `DOCSEARCH_ASK_AI_ASSISTANT_ID`.
4. Trigger a fresh deployment.

### Ask AI Suggested Questions

Keep `DOCSEARCH_ASK_AI_SUGGESTED_QUESTIONS=false` until suggested questions are configured in Algolia.

When this option is enabled, DocSearch reads from Algolia's managed `algolia_ask_ai_suggested_questions` index. Algolia creates that index automatically only after suggested questions are added for the assistant. If the option is enabled before the index exists, the browser can show this runtime error:

```text
Index algolia_ask_ai_suggested_questions does not exist
```

To enable suggested questions safely:

1. Open the Algolia dashboard.
2. Go to `Data Sources` -> `Ask AI`.
3. Open the assistant used by this site.
4. Add suggested questions during assistant setup or from the assistant analytics view.
5. Confirm the `algolia_ask_ai_suggested_questions` index exists in Algolia.
6. Set `DOCSEARCH_ASK_AI_SUGGESTED_QUESTIONS=true`.
7. Restart the local dev server or trigger a fresh Netlify deploy.

### Ask AI Troubleshooting

If Ask AI shows `AI-201 - Bad input`, the frontend request is reaching Algolia, but Algolia cannot match the request to a valid Agent Studio resource.

Check these values as one set from the same Algolia application:

1. `DOCSEARCH_APP_ID` matches the application that owns the DocSearch index.
2. `DOCSEARCH_API_KEY` is the public search-only key for that application.
3. `DOCSEARCH_INDEX_NAME` exactly matches the crawled documentation index.
4. `DOCSEARCH_ASK_AI_ASSISTANT_ID` belongs to an Agent Studio assistant in the same application.
5. The assistant is configured to use the same index.
6. The current domain is allowed in `Data Sources` -> `Ask AI` -> domains. For local testing, add `localhost` if Algolia allows it, or test from the deployed Netlify domain.
7. The LLM provider API key and model configured inside Algolia are valid.
8. Restart the dev server after changing `.env`.

### Getting Algolia Values

Use the public search-only key for `DOCSEARCH_API_KEY`. Do not use an Admin API key in this repository or in browser-facing configuration.

1. Apply for Algolia DocSearch or open the Algolia application created for this documentation site.
2. Open the Algolia dashboard.
3. Find the application ID from the application selector or the `Applications` area, then set it as `DOCSEARCH_APP_ID`.
4. Open the `Search` area and select the documentation index. Use that index name as `DOCSEARCH_INDEX_NAME`.
5. Open `Settings` -> `API Keys`, copy the Search API key, and set it as `DOCSEARCH_API_KEY`.
6. Open Agent Studio from the Algolia dashboard.
7. Create an assistant, connect it to the documentation index, add the allowed production and preview domains, choose the LLM provider and model, then finish the setup.
8. Copy the generated assistant ID and set it as `DOCSEARCH_ASK_AI_ASSISTANT_ID`.
9. Keep `DOCSEARCH_ASK_AI_SUGGESTED_QUESTIONS=false` unless suggested questions have been configured for the assistant.
10. Restart the local dev server or trigger a fresh Netlify deploy after changing these values.

### Algolia Operational Notes

- Apply to the Algolia DocSearch program if the site is eligible: <https://docsearch.algolia.com/docs/who-can-apply/>
- Use the recommended Docusaurus v3 crawler template: <https://docsearch.algolia.com/docs/templates/#docusaurus-v3-template>
- Use the recommended Docusaurus adapter for newer DocSearch and Agent Studio features: <https://docsearch.algolia.com/docs/docusaurus-adapter/>
- Follow the Algolia Ask AI setup guide before setting `DOCSEARCH_ASK_AI_ASSISTANT_ID`: <https://docsearch.algolia.com/docs/v4/askai>
- Enable suggested questions only after Algolia creates the managed suggested-questions index: <https://www.algolia.com/doc/guides/algolia-ai/askai/guides/suggested-questions>
- Use the Ask AI error reference when troubleshooting `AI-201` or provider errors: <https://docsearch.algolia.com/docs/v4/askai-errors/>
- Search results will not appear reliably until Algolia approves the setup and completes the first crawl.
- If content changes significantly and search results look stale, trigger a new crawl from the Algolia dashboard.

## Available Scripts

All available package scripts come from `package.json`.

| Command                      | Purpose                                           |
| ---------------------------- | ------------------------------------------------- |
| `bun run start`              | Run the Docusaurus development server             |
| `bun run build`              | Generate the production static site into `build/` |
| `bun run serve`              | Serve the generated production build locally      |
| `bun run lint`               | Run ESLint across the repository                  |
| `bun run lint:fix`           | Run ESLint with automatic fixes where possible    |
| `bun run typecheck`          | Run TypeScript type checking                      |
| `bun run format`             | Format files with Prettier                        |
| `bun run format:check`       | Check formatting without changing files           |
| `bun run clear`              | Clear Docusaurus cache artifacts                  |
| `bun run swizzle`            | Customize Docusaurus theme components             |
| `bun run write-translations` | Generate translation scaffolding                  |
| `bun run write-heading-ids`  | Write explicit heading IDs for docs               |
| `bun run deploy`             | Deploy the site with Docusaurus deployment flow   |

Recommended checks before merging documentation changes:

```bash
bun run lint
bun run typecheck
bun run format:check
bun run build
```

## Content Model

This repository follows a deliberate ownership split:

- Central repository content owns platform-level understanding, navigation, standards, and shared references.
- Service repositories own service-specific technical documentation and implementation detail.
- Synchronized service docs are expected to live under `docs/services/<service>/synced/`.

Use direct edits in this repository for:

- Overview and onboarding content
- Standards and governance
- Shared operations references
- Service landing pages and navigation

Use service-repository authored content for:

- Service internals
- API or interface details
- Runtime notes tied to one codebase
- Implementation-level architecture that should remain close to the source code

For the detailed rules, see:

- `docs/standards/contribution-guide.mdx`
- `docs/standards/service-documentation-integration.mdx`
- `docs/standards/documentation-sync-and-versioning.mdx`

## Contribution Guide

When contributing to this repository:

1. Put the content in the correct top-level section.
2. Keep platform content here and avoid duplicating service-owned technical detail.
3. Follow the metadata, structure, and review rules defined in `docs/standards/`.
4. Update navigation only when the content structure truly changes.
5. Validate the site before considering the work complete.

Good contribution targets in this repo:

- Cross-service documentation
- Onboarding improvements
- Architecture and data flow explanations
- Governance and review process updates
- Service landing page summaries

Changes that affect service boundaries, synchronization, or central structure should be aligned with the standards section before merge.

## Deployment Notes

The Docusaurus site configuration currently targets:

- Production URL: `https://bisakerja-docs.netlify.app`
- Base URL: `/`
- Default locale: `en`

The published site is currently hosted on Netlify. The primary deployment target is the static output generated from:

```bash
bun run build
```

The `bun run deploy` script still exists as a Docusaurus helper, but it should not be treated as the primary Netlify publishing path unless the hosting strategy changes again.

If the hosting target changes, update the relevant values in `docusaurus.config.ts` and the root documentation before deploying.
