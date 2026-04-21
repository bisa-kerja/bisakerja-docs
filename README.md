# Bisakerja Docs

Central documentation hub for the Bisakerja platform. This repository hosts the platform-level narrative, cross-service references, operational guidance, and documentation standards that make the overall system easier to understand and maintain.

The site is built with Docusaurus and published for use as the primary entry point before readers move into service-specific repositories and synchronized technical docs.

## Table of Contents

- [Overview](#overview)
- [What Lives Here](#what-lives-here)
- [Documentation Map](#documentation-map)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Search Configuration](#search-configuration)
- [Available Scripts](#available-scripts)
- [Content Model](#content-model)
- [Contribution Guide](#contribution-guide)
- [Deployment Notes](#deployment-notes)

## Overview

Bisakerja is positioned as an AI-powered career decision engine for job seekers in Indonesia. This documentation repository explains the platform from the system level and keeps the documentation model consistent as more services and contributors are added.

This repo is responsible for:

- platform overview and onboarding material
- architecture, data flow, and cross-service understanding
- shared operational references
- documentation standards, governance, and review rules
- service landing pages that route to synchronized service documentation

It is not intended to replace the source-of-truth technical documentation that belongs inside each service repository.

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
- `REFERENCE.md` for project background and source context used to build the docs foundation
- `TODO.md` for the documentation roadmap and milestone tracking

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
- ESLint
- Prettier

Runtime requirement:

- Node.js `>=20.0`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run start
```

Create a production build:

```bash
npm run build
```

The local dev server supports live reload, so most documentation and UI changes appear without restarting the process.

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
npm run start
```

For a production build:

```bash
npm run build
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
| `npm run start`              | Run the Docusaurus development server             |
| `npm run build`              | Generate the production static site into `build/` |
| `npm run serve`              | Serve the generated production build locally      |
| `npm run lint`               | Run ESLint across the repository                  |
| `npm run lint:fix`           | Run ESLint with automatic fixes where possible    |
| `npm run typecheck`          | Run TypeScript type checking                      |
| `npm run format`             | Format files with Prettier                        |
| `npm run format:check`       | Check formatting without changing files           |
| `npm run clear`              | Clear Docusaurus cache artifacts                  |
| `npm run swizzle`            | Customize Docusaurus theme components             |
| `npm run write-translations` | Generate translation scaffolding                  |
| `npm run write-heading-ids`  | Write explicit heading IDs for docs               |
| `npm run deploy`             | Deploy the site with Docusaurus deployment flow   |

Recommended checks before merging documentation changes:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Content Model

This repository follows a deliberate ownership split:

- Central repository content owns platform-level understanding, navigation, standards, and shared references.
- Service repositories own service-specific technical documentation and implementation detail.
- Synchronized service docs are expected to live under `docs/services/<service>/synced/`.

Use direct edits in this repository for:

- overview and onboarding content
- standards and governance
- shared operations references
- service landing pages and navigation

Use service-repository authored content for:

- service internals
- API or interface details
- runtime notes tied to one codebase
- implementation-level architecture that should remain close to the source code

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

- cross-service documentation
- onboarding improvements
- architecture and data flow explanations
- governance and review process updates
- service landing page summaries

Changes that affect service boundaries, synchronization, or central structure should be aligned with the standards section before merge.

## Deployment Notes

The Docusaurus site configuration currently targets:

- Production URL: `https://bisakerja-docs.netlify.app`
- Base URL: `/`
- Default locale: `en`

The published site is currently hosted on Netlify. The primary deployment target is the static output generated from:

```bash
npm run build
```

The `npm run deploy` script still exists as a Docusaurus helper, but it should not be treated as the primary Netlify publishing path unless the hosting strategy changes again.

If the hosting target changes, update the relevant values in `docusaurus.config.ts` and the root documentation before deploying.
