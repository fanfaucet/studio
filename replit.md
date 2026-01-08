# Agent Central

## Overview
Agent Central is a Next.js 15 dashboard application for monitoring and managing a fleet of AI agents. It provides a visual interface to track agent status, view recent tasks, monitor alerts, and analyze performance metrics.

## Project Structure
- `/src/app` - Next.js App Router pages and layouts
  - `/components/dashboard` - Dashboard-specific components (agent cards, alerts, performance charts)
- `/src/components/ui` - Reusable UI components (shadcn/ui)
- `/src/ai` - AI integration using Genkit
- `/src/lib` - Utilities, types, and mock data
- `/src/hooks` - Custom React hooks

## Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with tailwindcss-animate
- **UI Components**: Radix UI primitives with shadcn/ui
- **Forms**: react-hook-form with zod validation
- **Charts**: Recharts
- **AI**: Genkit with Google AI integration
- **Backend Services**: Firebase

## Development
- **Port**: 5000
- **Dev Command**: `npm run dev`
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

## Recent Changes
- 2026-01-08: Configured for Replit environment (port 5000, allowed dev origins)
