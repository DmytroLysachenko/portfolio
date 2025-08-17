---
title: Vibe Platform
publishDate: 2025-08-16 00:00:00
img: /assets/vibe-coding.webp
img_alt: A "coding lovable" platform UI - AI agent, code preview sandbox, and project dashboard.
description: |
  Vibe is a AI powered coding platform that blends typed full‑stack development with AI‑assisted workflows. Built on Next.js 15 with Tailwind CSS and shadcn/ui, it uses tRPC + TanStack Query for fully typed end‑to‑end data fetching, Inngest for background jobs and an AI toolkit to power a custom coding agent, and e2b to safely preview generated code in an isolated sandbox. Data is persisted with Prisma ORM on Neon Postgres. Clerk handles authentication and billing.
tags:
  - Web Application
  - Full-Stack Development
  - TypeScript
  - Next.js
  - shadcn/ui
  - tRPC
  - TanStack Query
  - Inngest
  - AI Agent
  - E2B
  - Prisma
  - Pet Project
---

> #### Overview

**Vibe Platform** is a "vibe coding" platform built to explore typed, AI‑augmented product building. The app is a **Next.js v15** project styled with **Tailwind CSS** and **shadcn/ui**. It leans on **tRPC** with **TanStack Query** for end‑to‑end types, **Inngest** for background jobs (e.g., code generation workflows), and the **Inngest AI Toolkit** to orchestrate a custom OpenAI‑powered coding agent. With **e2b**, generated code runs inside a secure virtual sandbox and can be previewed instantly in the browser. **Prisma ORM** with **Neon Postgres** persists users, projects, and messages, while **Clerk** powers auth and billing.

##### Links

- **Live Page**: [Vibe Platform Live](https://vibe-platform.vercel.app/)
- **GitHub Repository**: [View on GitHub](https://github.com/DmytroLysachenko/vibe-platform)

#### Technical Implementation

##### Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, shadcn/ui
- **Data Layer**: tRPC (end‑to‑end types), TanStack Query (client caching & mutations)
- **Background Jobs & AI**: Inngest (job orchestration), Inngest AI Toolkit (agent tools)
- **Execution Sandbox**: e2b (virtualized environment for safe code execution & previews)
- **Database & ORM**: Neon Postgres, Prisma ORM
- **Authentication & Billing**: Clerk
- **Utilities**: Zod, SuperJSON, Lucide React, Radix UI primitives

##### Rendering & Architecture

- **App Router** with server components where appropriate; colocated data procedures via **tRPC**.
- **Typed Procedures**: strict Zod schemas for inputs/outputs, producing compile‑time safety across the stack.
- **TanStack Query** integration for **optimistic UI** and fine‑grained cache invalidation tied to tRPC procedures.
- **Background Workflows**: **Inngest** runs code‑generation tasks, retry logic, and rate‑limited pipelines.
- **AI Agent**: Built using the **Inngest AI Toolkit** to compose tools (project context retrieval, file writes, formatting, validation, and sandbox execution).
- **Sandboxed Previews**: **e2b** executes generated code and streams output to the UI for instant feedback.
- **Persistence**: **Prisma** models for users, projects, sessions, and messages stored on **Neon** (serverless Postgres).

> #### User Experience (UX)

##### Who it’s for

- **Developers** exploring vibe coding.
- **Product Hackers** validating ideas fast via code generation + safe previews.

##### Key Features

- **Typed End‑to‑End Data** with **tRPC + Zod** for safe, frictionless full‑stack development.
- **AI Coding Agent** orchestrated by **Inngest AI Toolkit** for code generation & refactors.
- **Virtual Sandbox Previews** via **e2b**, keeping your host app safe.
- **Background Jobs** using **Inngest**: queued tasks, retries, and scheduled runs.
- **Project Workspace**: manage projects, generated files, and execution logs.
- **Auth & Billing** with **Clerk**, ready for multi‑tenant growth.

> #### Challenges & Learning Experiences

- **First time with tRPC**: discovering how powerful fully typed client↔server contracts are for full‑stack apps. This project cemented tRPC as a go‑to tool in my workflow and I plan to deepen my expertise.
- **Building my first AI agent**: a steep learning curve (lots of docs reading) but an amazing experience. Wiring the tools, job orchestration, and sandbox execution together clarified how to ship reliable AI features.
- **Async orchestration**: tuning **Inngest** workflows and query invalidation so the UI stays responsive while jobs run in the background.
- **Secure code execution**: isolating generated code in **e2b** ensured safety without sacrificing fast feedback.

> #### Conclusion

**Vibe** brings together typed full‑stack patterns and practical AI workflows. The combination of **tRPC + TanStack Query**, **Inngest** jobs, and **e2b** sandbox previews made development productive and fun. I’m excited to keep iterating—expanding the agent’s toolset, improving tracing & observability, and exploring collaborative project features.
