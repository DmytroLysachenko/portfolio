---
title: Aora
publishDate: 2025-01-01 00:00:00
img: /assets/aora-preview.jpg
img_alt: A mobile app interface displaying AI-generated video content.
description: |
  Aora is a cross-platform mobile application designed for sharing AI-generated videos. Developed as a personal project, it serves as a learning experience in modern mobile development with React Native and Expo while exploring scalable app architecture.
tags:
  - Mobile App
  - TypeScript
  - React Native
  - Pet Project
---

> #### Overview

**Aora** is a mobile application designed to facilitate seamless sharing and playback of AI-generated videos. It was created to explore the React Native ecosystem, understand mobile app design principles, and experiment with cloud-based backends.

##### Links

- **GitHub Repository**: [View on GitHub](https://github.com/DmytroLysachenko/aora-app)
- **Download APK**: [Aora Installer](https://drive.google.com/file/d/1Smm8iN1iB2PTuENnx6NwNytfX2RGWZDw/view?usp=sharing)

> #### Technical Implementation

##### Tech Stack

- **Frontend**: React Native (0.76.6) with Expo (~52.0.26)
- **Backend**: Appwrite for authentication & storage
- **Media Playback**: expo-video
- **File Handling**: expo-document-picker
- **Navigation**: expo-router
- **Styling**: nativewind & tailwindcss

##### Architecture & Development Insights

- **State Management**: Utilized React Context API for global state handling.
- **Performance Optimization**: Implemented lazy loading and caching for better responsiveness.
- **Scalability Considerations**: Designed with modular components and reusable hooks for future feature expansion.

> #### User Experience (UX)

##### Target Audience

- Content creators experimenting with AI-generated videos
- Enthusiasts interested in AI-powered media platforms
- Developers looking for a mobile app example using React Native and Expo

##### Key Features

- **Simple & Intuitive UI**: A minimalistic yet engaging design for seamless content consumption.
- **Smooth Video Playback**: Optimized using **expo-video** for a high-quality viewing experience.
- **Secure Authentication**: Implemented with **Appwrite** to ensure user data privacy.
- **Easy Media Uploads**: Supports document and video uploads using **expo-document-picker**.
- **Dynamic Navigation**: Modular app flow with **expo-router** for smooth user interaction.

> #### Challenges & Learning Experiences

##### First Time Using React Native & Expo

This was my first project using **React Native**, providing deep insight into mobile development. Working with **Expo** was a highlight, as it streamlined development and is now the recommended approach by the React Native documentation.

##### Key Differences Between Mobile & Web Development

- **Project & Component Structure**: Mobile apps require different project organization compared to web.
- **Development vs Production Environments**: Handling device-specific debugging and performance tuning was a learning curve.
- **Styling Differences**: Unlike traditional CSS, **nativewind** (Tailwind for React Native) introduced new styling paradigms suited for mobile development.

##### Challenge 1: Managing Large Video Files

- **Problem**: Handling AI-generated videos required an efficient storage solution.
- **Solution**: Appwrite's cloud storage was used to optimize file management and retrieval, reducing load times.

##### Challenge 2: Navigation Structure

- **Problem**: Managing deep navigation routes within the app without compromising performance.
- **Solution**: Used **expo-router** to organize screens into a modular hierarchy, improving maintainability.

##### Challenge 3: Ensuring Smooth Playback on Various Devices

- **Problem**: Different devices had inconsistent performance with video playback.
- **Solution**: Leveraged **expo-video** with adaptive streaming and caching mechanisms for a seamless experience.

> #### Conclusion

Aora provided hands-on experience in building a feature-rich mobile application while experimenting with modern technologies. The project reinforced best practices in **cross-platform development, cloud integration, and performance optimization**.

Future improvements include:

- Enhancing social features (comments, likes)
- AI-driven content recommendations
- Offline playback functionality
