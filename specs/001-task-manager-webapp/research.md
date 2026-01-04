# Research: Drag-and-Drop Library for Task Manager

**Date**: 2026-01-04

## Decision

We will use **`dnd-kit`** for implementing drag-and-drop functionality.

## Rationale

The feature requires a highly interactive and accessible drag-and-drop interface for moving tasks between columns. The chosen library must integrate seamlessly with the specified tech stack (React, Vite, Tailwind CSS).

- **Accessibility**: `dnd-kit` is built with accessibility in mind, offering first-class support for keyboard navigation, screen readers, and customizable announcements. This directly addresses the user's requirement for the application to meet accessibility guidelines for both mouse and touch interactions.
- **Modern & Maintained**: It is a modern library designed for React, is actively maintained, and avoids the legacy issues found in older libraries like `react-beautiful-dnd` (which has known compatibility issues with React 18's Strict Mode).
- **Performance**: It is lightweight and designed for performance, which aligns with the "premium aesthetics" and smooth interactions principle.
- **Flexibility**: It is a modular library that provides the building blocks to create any kind of drag-and-drop experience, which will be essential for customizing the look and feel to match `shadcn/ui` and Tailwind CSS.

## Alternatives Considered

- **`react-beautiful-dnd`**: While very popular, it is not actively maintained and has known issues with React 18. Its "snapshot" based API can also be less intuitive than `dnd-kit`'s hook-based approach.
- **`react-dnd`**: A powerful and popular library, but it has a steeper learning curve and a more verbose API compared to `dnd-kit`. For the scope of this project, `dnd-kit` provides a simpler and more direct path to achieving the desired functionality without unnecessary complexity.
