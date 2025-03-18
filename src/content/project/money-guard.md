---
title: Money Guard
publishDate: 2024-03-13
img: /assets/money-guard.webp
img_alt: A finance tracking web application interface with charts, expense breakdowns, and user insights.
description: |
  Money Guard is a modern web application for tracking users' income and expenses statistics. It features interactive financial charts, dynamic reports, and a seamless user experience. Built with React.js and Vite, the project ensures fast performance and a smooth UI.
tags:
  - Web Application
  - Frontend Development
  - JavaScript
  - React.js
  - Redux Toolkit
  - Team Project
---

> #### Overview

**Money Guard** is a financial tracking web application designed to help users monitor and analyze their income and expenses. The platform provides **real-time financial insights** using interactive charts, detailed statistics, and an intuitive user interface.

The application is built with **React.js**, using **Vite** as the bundler for optimized performance. It features **Redux Toolkit (RTK)** for global state management, ensuring seamless data flow across the app. The project was developed collaboratively, with my role focusing on **global state management, API integration, and component assembly according to the project’s Figma design**.

##### Links

- **Live Page**: [Money Guard Deployment](https://money-guard2.vercel.app/)
- **GitHub Repository**: [View on GitHub](https://github.com/Lubov1506/Money-Guard)

> #### Technical Implementation

##### Tech Stack

- **Frontend**: React.js, Vite, Redux Toolkit
- **State Management**: RTK (Redux Toolkit) & Redux Persist
- **API Handling**: Axios
- **Data Visualization**: Chart.js & React-Chartjs-2
- **Routing**: React Router DOM
- **Form Management**: Formik & Yup
- **Animations**: Framer Motion
- **UI Enhancements**: React Toastify, React Icons, React Datepicker
- **Styling**: Modern Normalize, Clsx

##### Architecture & Development Insights

- **Global State Management with Redux Toolkit (RTK)**: Implemented RTK for managing global state efficiently, ensuring smooth handling of financial data and user preferences.
- **API Integration & Data Fetching**: Utilized Axios for handling HTTP requests, fetching financial records, and managing authentication.
- **Modular Component-Based Development**: Structured the application with reusable React components to enhance maintainability and scalability.
- **Project Layout & UI Consistency**: Ensured accurate positioning and styling according to Figma design specifications.

> #### User Experience (UX)

##### Target Audience

- **Individuals & Budget Planners**: Users looking for a simple and effective tool to track income and expenses.
- **Freelancers & Small Business Owners**: People who need an overview of their financial activity with insightful visualizations.
- **Developers & Finance Enthusiasts**: Those interested in exploring financial data visualization techniques in React.

##### Key Features

- **Real-Time Expense & Income Tracking**:
  - Add, edit, and delete financial records
  - Categorized expense breakdown
- **Interactive Data Visualization**:
  - Dynamic financial charts (Chart.js)
  - Animated UI with Framer Motion
- **Persistent User Data**:
  - Redux Persist ensures data retention between sessions
- **Form Validation & Input Handling**:
  - Formik & Yup for secure and error-free input processing

> #### Challenges & Learning Experiences

##### Efficient Global State Management with RTK

- **Problem**: Managing financial data across multiple components while ensuring reactivity and consistency.
- **Solution**: Used **Redux Toolkit** to centralize and optimize state management, improving performance and maintainability.

##### API Handling & Data Fetching

- **Problem**: Handling asynchronous data fetching efficiently while ensuring a smooth user experience.
- **Solution**: Implemented **Axios with optimized API calls**, ensuring fast and reliable data fetching.

##### Implementing Smooth & Engaging UI

- **Problem**: Making the financial tracking UI both visually appealing and highly interactive.
- **Solution**: Integrated **Framer Motion** for animations and **Chart.js** for real-time data visualization.

##### Maintaining UI Consistency Across Components

- **Problem**: Ensuring that all components adhered to the Figma design specifications.
- **Solution**: Carefully structured and styled components using **Clsx & Modern Normalize** to maintain visual consistency.

> #### Conclusion

**Money Guard** demonstrates how a modern **React.js application** can efficiently track and visualize financial data while providing a seamless user experience. Through the use of **Redux Toolkit for global state management**, **Axios for API handling**, and **Framer Motion for animations**, the project delivers both functionality and interactivity.

Future improvements include:

- Advanced financial insights and reporting
- AI-powered budgeting recommendations
- Multi-user account support for collaborative budgeting
