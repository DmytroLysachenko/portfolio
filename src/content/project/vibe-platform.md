---
title: Vibe Platform
publishDate: 2025-08-16 00:00:00
img: /assets/vibe-coding.webp
img_alt: An AI-powered coding platform with an agent panel, project file tree, and live code preview sandbox.
description: Vibe is an AI-powered coding platform that lets users spin up mini projects, collaborate with an intelligent coding agent, and instantly preview results in a safe sandbox. It provides personal workspaces with authentication, project and file management, execution logs, and basic billing. Users can experiment, generate new code, refine existing features, and see their changes come to life immediately in the browser.
tags:
  - Web Application
  - Full-Stack Development
  - TypeScript
  - Next.js
  - AI-Powered
  - Pet Project
---

> #### Overview

**Vibe Platform** is designed to let users spin up a project, ask the **AI coding agent** for changes, and preview the result in a **virtual sandbox**—all inside the browser. Workspaces are secured behind **Clerk** authentication with basic billing enabled. Data about users, projects, and messages is stored with **Prisma** on **Neon Postgres**.

Users can experience **AI‑assisted coding**, generate/edit project files, run code in an e2b sandbox with logs/output, and track background job status for code generation and validations.

##### Links

- **Live Page**: [Vibe Platform Live](https://vibe-platform.vercel.app/)
- **GitHub Repository**: [View on GitHub](https://github.com/DmytroLysachenko/vibe-platform)

> #### Technical Implementation

##### Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, shadcn/ui
- **Data Layer**: **tRPC** (end‑to‑end types) + **TanStack Query** (client caching & mutations)
- **Background Jobs & AI**: **Inngest** orchestration + **Inngest AI Toolkit** (agent tools)
- **Execution Sandbox**: **e2b** for isolated code execution & live preview
- **Database & ORM**: **Neon Postgres** + **Prisma ORM**
- **Auth & Billing**: **Clerk**
- **Utilities**: Zod, SuperJSON, Radix UI, Lucide

##### Architecture & Development Insights

- **App Router + tRPC Procedures**: Colocated, strictly typed procedures using **Zod** schemas for inputs/outputs; shared types eliminate API drift.
- **Query Lifecycles**: **TanStack Query** enables optimistic updates and targeted invalidation tied to tRPC procedure keys.
- **Job Orchestration**: **Inngest** runs code‑generation pipelines with retries, backoff, and rate limits; job state is reflected in the UI.
- **Agent Tooling**: The **Inngest AI Toolkit** wires tools for context retrieval, file writes, formatting, validation, and sandbox execution.
- **Sandboxed Previews**: **e2b** executes generated code in an isolated environment and streams output/logs to the UI.
- **Persistence**: **Prisma** models (users, projects, messages) stored on **Neon** serverless Postgres.

> #### User Experience (UX)

##### Target Audience

- **Developers & Tinkerers** experimenting with typed full‑stack + AI
- **Product Hackers** validating ideas via fast code generation & previews
- **Learners** exploring **tRPC + TanStack Query + Inngest** patterns

##### Key Features

- **AI Coding Agent**
  - Generation and refactors with queued background runs
- **Project Workspace**
  - File tree, execution logs, and run history
- **Instant Previews**
  - e2b virtual sandbox with live output
- **Typed End‑to‑End Data**
  - tRPC + Zod contracts
- **Auth & Billing**
  - Clerk‑powered sign‑in and basic billing

> #### Challenges & Learning Experiences

##### Typed Full‑Stack with tRPC

- **Problem**: Ensuring safe, frictionless client↔server interactions without duplicating request/response types.
- **Solution**: Adopted **tRPC** with **Zod** schemas for inputs/outputs, enabling compile‑time safety and shared contracts across the stack.

##### Agent Orchestration & Background Jobs

- **Problem**: Coordinating multi‑step code‑generation tasks (tools, validations, retries) while keeping the UI responsive.
- **Solution**: Used **Inngest** workflows + the **Inngest AI Toolkit** to compose agent tools and background pipelines; surfaced job state to the UI via **TanStack Query**.

##### Async UI & Query Invalidation

- **Problem**: Data getting stale during long‑running jobs and after code generation completes.
- **Solution**: Leveraged **TanStack Query** to scope caches to tRPC procedure keys and perform targeted invalidations on job completion events.

##### Safe Code Execution

- **Problem**: Running untrusted, generated code without risking the host app.
- **Solution**: Executed all generated code inside an **e2b** virtualized sandbox and streamed results back to the client.

> #### Conclusion

**Vibe** combines typed full‑stack patterns with practical AI workflows for a fast feedback loop. Next steps include richer agent tools, better tracing/observability, collaborative editing, and project templates for quicker starts.
