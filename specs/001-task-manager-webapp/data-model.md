# Data Model: Task Manager

**Date**: 2026-01-04
**Source Spec**: [spec.md](./spec.md)

This document defines the core data entities for the Task Manager application. As this is a client-side application, this model will be implemented in TypeScript interfaces and managed in the browser's `localStorage`.

## Entities

### Column

Represents a vertical lane on the task board.

-   **`id`**: `string` (e.g., "tasks", "meetings", "backburner") - *Primary Key*
-   **`title`**: `string` (e.g., "Tasks", "Meetings", "Backburner")

### Task

Represents a single card on the task board.

-   **`id`**: `string` (e.g., a UUID) - *Primary Key*
-   **`columnId`**: `string` - *Foreign Key to Column.id*
-   **`title`**: `string` - *Mandatory*
-   **`description`**: `string | null` - *Optional*
-   **`deadline`**: `Date | null` - *Optional, must be a future date*

## Relationships

-   A `Column` can contain zero or more `Tasks`.
-   Each `Task` must belong to exactly one `Column`.

## State Transitions

-   A `Task`'s `columnId` can be updated when a user moves it from one column to another.
-   A `Task` can be created and added to the list of tasks for a specific column.
-   A `Task` can be removed from the list of tasks.
