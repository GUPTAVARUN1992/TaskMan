# Contract: Local Storage API

**Date**: 2026-01-04

This document defines the contract for interacting with the browser's `localStorage` to ensure data persistence across sessions. All data will be stored under a single JSON object with a key of `task-manager-data`.

## Data Shape

The data stored in `localStorage` will conform to the following TypeScript interface:

```typescript
interface Task {
  id: string;
  columnId: string;
  title: string;
  description: string | null;
  deadline: Date | null;
}

interface Column {
  id: string;
  title: string;
}

interface AppData {
  tasks: Task[];
  columns: Column[];
}
```

## Functions

The application will use a service module that exposes the following functions to interact with `localStorage`.

### `getData(): AppData`

-   **Description**: Retrieves the entire application state (tasks and columns) from `localStorage`. If no data is present, it returns a default initial state.
-   **Returns**: `AppData` object.

### `saveData(data: AppData): void`

-   **Description**: Serializes the provided `AppData` object to a JSON string and saves it to `localStorage`.
-   **Parameters**:
    -   `data`: The complete `AppData` object to save.
-   **Returns**: `void`.
