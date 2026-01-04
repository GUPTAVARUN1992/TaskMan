# Quickstart Guide: Task Manager Web App

**Date**: 2026-01-04

This guide provides instructions to set up and run the Task Manager web application locally.

## Prerequisites

-   Node.js (v18 or newer)
-   npm or a compatible package manager

## Setup

1.  **Install Dependencies**: Navigate to the `frontend` directory and install the required packages.
    ```bash
    cd frontend
    npm install
    ```

2.  **Initialize shadcn/ui**: If not already configured, you may need to run the `shadcn-ui` init command.
    ```bash
    npx shadcn-ui@latest init
    ```
    *(Follow the prompts, accepting the defaults)*

## Running the Application

1.  **Start the Development Server**: From the `frontend` directory, run the Vite development server.
    ```bash
    npm run dev
    ```

2.  **Access the App**: Open your web browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

The application will be running with hot-reloading enabled. Any changes you make to the source code will be reflected in the browser automatically.
