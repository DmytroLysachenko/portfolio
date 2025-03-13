---
title: Cooking Spot
publishDate: 2025-03-13 00:00:00
img: /assets/cooking-spot.png
img_alt: A modern recipe website interface with sorting, filtering, and interactive user features.
description: |
  Cooking Spot is a highly optimized and interactive recipe website built with Astro v5. It leverages Astro's hybrid rendering capabilities to deliver an ultra-fast, SEO-friendly experience while maintaining dynamic features for user engagement.
tags:
  - Web Application
  - Full-Stack Development
  - TypeScript
  - Astro
  - PostgreSQL
  - Pet Project
---

> #### Overview

**Cooking Spot** is a modern recipe website designed to offer a seamless and engaging cooking experience. The platform utilizes **Astro v5** with a focus on maximizing **SSG (Static Site Generation)** while integrating **SSR (Server-Side Rendering) islands** for dynamic user interactions. Users can browse, filter, and search for recipes, as well as engage by liking, rating, and commenting on their favorite dishes.

A dedicated profile section allows users to manage their liked and rated recipes, update their avatar, and personalize their experience. The site is optimized for **SEO, performance, and usability**, making it a perfect portfolio showcase of a well-structured and efficient web application.

##### Links

- **Live Page**: [Cooking Spot Vercel deployment](https://astro-cookbook-sable.vercel.app/)
- **GitHub Repository**: [View on GitHub](https://github.com/DmytroLysachenko/astro-cookbook)

> #### Technical Implementation

##### Tech Stack

- **Frontend**: Astro v5, React, Tailwind CSS, Shadcn/ui
- **Backend**: Astro API routes, PostgreSQL (Neon DB), Drizzle ORM
- **Authentication**: OAuth with Google, Facebook, and GitHub via Auth.js
- **Media Handling**: ImageKit for avatar storage and file uploads
- **Rendering Strategy**:
  - **SSG**: Recipes and static pages for maximum performance
  - **SSR Islands**: Interactive elements (likes, ratings, comments)
  - **CSR**: Client-side interactions for instant feedback

##### Architecture & Development Insights

- **Astro’s Hybrid Rendering**: Leveraged **SSG** for speed and SEO, while integrating **SSR** islands to dynamically fetch and update user interactions.
- **Optimized User Experience**: Preloaded static content while deferring dynamic updates using Astro’s islands, ensuring smooth and fast page loads.
- **Database Management**: Used **Drizzle ORM** with **PostgreSQL** (Neon) to store user interactions (likes, ratings, comments) efficiently.
- **Authentication & Profile Customization**: Implemented **Auth.js** for OAuth authentication, and **ImageKit** to enable users to update profile avatars dynamically.

> #### User Experience (UX)

##### Target Audience

- **Home Cooks & Food Enthusiasts**: Searching for well-structured and categorized recipes.
- **Content Creators & Recipe Bloggers**: Showcasing content using MDX-based rich recipe pages.
- **Developers**: Learning how to build a performance-optimized web application using Astro.

##### Key Features

- **Dynamic Recipe Browsing**:
  - Filter & sort recipes
  - View ingredient nutrition tables
- **Interactive User Engagement**:
  - Like, rate, and comment on recipes
- **Personalized User Profile**:
  - Track liked/rated recipes
  - Update avatar and bio
- **High-Performance SEO Optimization**:
  - Pre-rendered static pages with fast dynamic updates

> #### Challenges & Learning Experiences

##### Maximizing Performance with SSG & SSR Islands

One of the biggest challenges was balancing **Astro’s static generation** with the need for real-time dynamic content. The solution was to use **SSG** as much as possible while incorporating **SSR islands** selectively for real-time interactions, keeping the site both fast and functional.

##### Efficient Database Design & API Management

- **Problem**: Managing dynamic data (likes, ratings, comments) without sacrificing performance.
- **Solution**: Used **Drizzle ORM** with **PostgreSQL (Neon DB)** to store only necessary dynamic content while keeping recipe data in static MDX files for fast retrieval.

##### Handling Image Uploads & Profile Customization

- **Problem**: Allowing users to upload and change profile avatars efficiently.
- **Solution**: Integrated **ImageKit** for image storage and processing, enabling smooth and fast avatar updates.

##### Authentication & Security

- **Problem**: Ensuring secure authentication and user management.
- **Solution**: Implemented **OAuth authentication via Auth.js**, allowing users to sign in with Google, Facebook, and GitHub securely.

> #### Conclusion

**Cooking Spot** showcases how **Astro’s Island architecture** can be leveraged to build a **high-performance, interactive web application**. By maximizing **SSG**, strategically using **SSR**, and incorporating **CSR where needed**, the project achieves an optimal balance of **speed, usability, and dynamic features**.

Future enhancements include:

- Advanced filtering (e.g., dietary preferences, cooking time)
- Internationalization support (i18n)
- Real-time notifications for user interactions
