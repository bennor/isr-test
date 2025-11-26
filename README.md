# ISR Test Application

A Next.js application for testing Incremental Static Regeneration (ISR) patterns and strategies.

## Overview

This app demonstrates different approaches to implementing ISR in Next.js 15 with the App Router, showcasing various revalidation patterns and static generation strategies.

## Features

The application includes six different test routes organized into three categories:

### 1. Static Pages - No Parameters
- **Fetch with Revalidate** (`/static-no-params-fetch-revalidate`)
  - Uses `fetch()` with `{ next: { revalidate: 60 } }`
  - Fetches data from JSONPlaceholder API
- **Revalidate Const** (`/static-no-params-revalidate-const`)
  - Uses `export const revalidate = 60`
  - Page-level revalidation configuration

### 2. Static Pages - URL Parameters
- **Fetch with Revalidate** (`/static-param-fetch-revalidate/[id]`)
  - Dynamic routing with URL parameters
  - Uses `fetch()` with revalidate option
- **Revalidate Const** (`/static-param-revalidate-const/[id]`)
  - Dynamic routing with page-level revalidation

### 3. Static Pages - generateStaticParams
- **Fetch with Revalidate** (`/static-generateparams-fetch-revalidate/[id]`)
  - Pre-renders pages for IDs 1-5 at build time
  - Uses `generateStaticParams()` + fetch revalidation
- **Revalidate Const** (`/static-generateparams-revalidate-const/[id]`)
  - Pre-renders pages for IDs 1-5 at build time
  - Uses `generateStaticParams()` + page-level revalidation

## Technical Details

- **Framework**: Next.js 16.0.4 with App Router
- **Runtime**: React 19.2.0
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Revalidation**: All pages revalidate every 60 seconds
- **Data Source**: JSONPlaceholder API for testing

## Key Testing Features

- Real-time timestamp display to observe revalidation
- Fetch date headers from API responses
- Visual indicators for different revalidation strategies (color-coded links)
- Both dark and light mode support

## Getting Started

Install dependencies:
```bash
pnpm install
```

Run development server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
pnpm start
```

## Development

- **Linting**: `pnpm lint` (using Biome)
- **Formatting**: `pnpm format` (using Biome)

Open [http://localhost:3000](http://localhost:3000) to view the application and test different ISR patterns.
