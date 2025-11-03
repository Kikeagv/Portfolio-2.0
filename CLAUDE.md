# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with the T3 Stack: Next.js 15, tRPC, TypeScript, Tailwind CSS, and Zod for environment validation. The project uses React 19 and is configured with modern tooling including ESLint, Prettier, and PostCSS.

## Development Commands

### Primary Commands
- `bun dev` - Start development server with Turbo (runs on http://localhost:3000)
- `bun build` - Build production version
- `bun start` - Start production server
- `bun preview` - Build and start production server

### Code Quality
- `bun lint` - Run ESLint
- `bun lint:fix` - Run ESLint with auto-fix
- `bun typecheck` - Run TypeScript type checking
- `bun check` - Run both lint and typecheck (recommended before commits)
- `bun format:check` - Check Prettier formatting
- `bun format:write` - Apply Prettier formatting

## Architecture

### tRPC API Structure
- **API Router**: `src/server/api/root.ts` - Main router that aggregates all sub-routers
- **Procedures**: `src/server/api/routers/` - Individual routers (currently has `post.ts`)
- **tRPC Setup**: `src/server/api/trpc.ts` - Core tRPC configuration
- **API Endpoint**: `src/app/api/trpc/[trpc]/route.ts` - Next.js API route for tRPC

### Client-side tRPC
- **React Provider**: `src/trpc/react.tsx` - tRPC React Query provider with client setup
- **Server-side Helper**: `src/trpc/server.ts` - Server-side tRPC calls
- **Query Client**: `src/trpc/query-client.ts` - React Query client configuration

### Key Patterns
- Uses SuperJSON for serializing data between client and server
- Environment variables validated through `src/env.js` using Zod schemas
- Tailwind CSS v4 with PostCSS configuration
- Mock data currently used (no database setup yet)

### File Structure
- `src/app/` - Next.js 15 app router structure
- `src/server/` - Server-side code (tRPC routers, API handlers)
- `src/trpc/` - tRPC client and server configuration
- `src/styles/` - Global CSS (Tailwind)

## Important Notes

### Package Manager
This project uses **Bun** as the preferred package manager. All commands should be run with `bun` instead of `npm` or `yarn`.

### Conventional Commits
All commits must follow Conventional Commits specification and should not be co-authored by Claude.

### Environment Validation
Environment variables are strictly validated through Zod schemas in `src/env.js`. Use `SKIP_ENV_VALIDATION=true` for Docker builds if needed.

### tRPC Data Flow
1. Define procedures in `src/server/api/routers/`
2. Export router from `src/server/api/root.ts`
3. Use `api` from `~/trpc/react` in components
4. Use `api` from `~/trpc/server` for server-side calls