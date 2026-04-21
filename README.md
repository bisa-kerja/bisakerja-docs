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

This site supports Docusaurus' official Algolia DocSearch integration.

The search UI is enabled only when all three Algolia values are present in a local `.env` file:

- `DOCSEARCH_APP_ID`
- `DOCSEARCH_API_KEY`
- `DOCSEARCH_INDEX_NAME`

If any of these values are missing, the site still builds normally and the search bar stays hidden.

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
4. Trigger a new deploy after saving the values.

### Algolia Operational Notes

- Apply to the Algolia DocSearch program if the site is eligible: <https://docsearch.algolia.com/docs/who-can-apply/>
- Use the recommended Docusaurus v3 crawler template: <https://docsearch.algolia.com/docs/templates/#docusaurus-v3-template>
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
