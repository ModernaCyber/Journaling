# Personal Journaling App

Welcome to the Personal Journaling App project! This repository contains the source code for a mobile application and its corresponding backend service, designed to help users maintain personal journals.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Service](#backend-service)
  - [Mobile Application](#mobile-application)
- [API Documentation](#api-documentation)

## Overview

The Personal Journaling App allows users to write journal entries, categorize them, and view summaries of their entries. The project is built using React Native for the mobile application and Express.js with Sequelize and PostgreSQL for the backend service.

## Project Structure

- **server/**: Contains the backend service code.
- **JournalApp/**: Contains the mobile application code (Expo app).

## Setup Instructions

### Backend Service

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ModernaCyber/Journaling.git
   cd Journaling/server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root of the project and add your PostgreSQL configuration:

   ```env
   DB_DIALECT=postgres
   DB_HOST=localhost
   DB_USERNAME=yourusername
   DB_PASSWORD=yourpassword
   DB_DATABASE=yourdatabase
   JWT_SECRET=yourjwtsecret
   ```


4. **Start the backend service:**

   ```bash
   npm run dev
   ```

### Mobile Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ModernaCyber/Journaling.git
   cd Journaling/JournalApp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application:**

   ```bash
   npm start
   ```

## API Documentation

The API documentation is generated using TSOA and can be accessed at the `/docs` endpoint once the backend service is running.

---

Thank you for using the Personal Journaling App. If you have any questions or need further assistance, please feel free to reach out.

Happy journaling!
