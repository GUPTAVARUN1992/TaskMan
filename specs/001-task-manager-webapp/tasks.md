# Tasks: Task Manager Web App

**Input**: Design documents from `specs/001-task-manager-webapp/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root. This project uses a `frontend/` directory for all source code.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and dependency setup.

- [ ] T001 Initialize a new Vite project with the React & TypeScript template in a new `frontend/` directory.
- [ ] T002 [P] Install and configure Tailwind CSS in `frontend/tailwind.config.js` and `frontend/src/index.css`.
- [ ] T003 [P] Install `dnd-kit` and its dependencies (`@dnd-kit/core`, `@dnd-kit/sortable`).
- [ ] T004 [P] Install `lucide-react` for icons used by shadcn/ui.
- [ ] T005 Run `npx shadcn-ui@latest init` to configure `shadcn/ui` in the `frontend/` directory.
- [ ] T006 Create the initial source code directory structure inside `frontend/src/` (`app/`, `components/board`, `components/column`, `components/task`, `lib/`, `services/`).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

- [ ] T007 [P] Define `Task` and `Column` TypeScript interfaces in `frontend/src/lib/types.ts` based on `data-model.md`.
- [ ] T008 [P] Implement the `localStorage` service functions (`getData`, `saveData`) in `frontend/src/services/storage.ts` based on `contracts/storage-api.md`.
- [ ] T009 Create a React context (`AppContext`) for state management in `frontend/src/app/state-provider.tsx`. This provider will manage tasks and columns.
- [ ] T010 Implement the main `App` component to use `AppContext` and render the main board layout in `frontend/src/App.tsx`.
- [ ] T011 Create the main `Board` component which will receive column and task data from `AppContext` and render `Column` components in `frontend/src/components/board/board.tsx`.

---

## Phase 3: User Story 1 - Create and View Tasks (Priority: P1) 🎯 MVP

**Goal**: A user can add a new task to a column and see it displayed with its details.

**Independent Test**: The application should render the three columns. A user should be able to click an "Add Task" button within a column, fill out a form, and see the new task card appear in that column.

### Implementation for User Story 1

- [ ] T012 [P] [US1] Create the `Column` component UI in `frontend/src/components/column/column.tsx` to display its title and a list of tasks passed to it.
- [ ] T013 [P] [US1] Create the `TaskCard` component UI in `frontend/src/components/task/task.tsx` to display a task's title, description, and deadline. Use `shadcn/ui`'s `Card` component.
- [ ] T014 [US1] Add a button to the `Column` component that opens a dialog/modal for creating a new task. Use `shadcn/ui`'s `Button` and `Dialog` components.
- [ ] T015 [US1] Implement the "Add New Task" form within the dialog.
- [ ] T016 [US1] Implement the `addTask` function in the `AppContext` provider (`frontend/src/app/state-provider.tsx`) to handle adding a new task to the state and persisting it via the storage service.

---

## Phase 4: User Story 2 - Move Tasks Between Columns (Priority: P2)

**Goal**: A user can drag a task from one column and drop it into another.

**Independent Test**: Create several tasks. A user should be able to click and drag a task card from one column, hover over another column, and release the mouse to move the task successfully. The change must persist after a page refresh.

### Implementation for User Story 2

- [ ] T017 [US2] Wrap the `Board`, `Column`, and `TaskCard` components with the necessary `DndContext` and providers from `dnd-kit` in `frontend/src/components/board/board.tsx`.
- [ ] T018 [US2] Make the `TaskCard` component draggable by applying the `useDraggable` or `useSortable` hook from `dnd-kit`.
- [ ] T019 [US2] Make the `Column` component a droppable zone by applying the `useDroppable` hook from `dnd-kit`.
- [ ] T020 [US2] Implement the `handleDragEnd` event handler in the `Board` component to update the task's `columnId` upon a successful drop.
- [ ] T021 [US2] Update the `AppContext` provider with a `moveTask` function that modifies the application state and persists the changes.

---

## Phase 5: User Story 3 - Remove a Task (Priority: P3)

**Goal**: A user can permanently delete a task.

**Independent Test**: Create a task. The task card should have a "delete" button. Clicking this button should remove the task from the UI, and it should not reappear after a page refresh.

### Implementation for User Story 3

- [ ] T022 [P] [US3] Add a "Delete" button to the `TaskCard` component UI in `frontend/src/components/task/task.tsx`.
- [ ] T023 [US3] Implement the `deleteTask` function in the `AppContext` provider (`frontend/src/app/state-provider.tsx`) that removes a task from the state and persists the changes.
- [ ] T024 [US3] Connect the "Delete" button's `onClick` event to call the `deleteTask` function from the context.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements affecting the overall application.

- [ ] T025 [P] Ensure all interactive elements (`Button`, `Dialog` inputs, draggable cards) are fully accessible via keyboard.
- [ ] T026 [P] Test and verify the responsive design of the board, columns, and cards on mobile screen sizes.
- [ ] T027 [P] Review the application for consistent styling and adherence to the `shadcn/ui` aesthetic.
- [ ] T028 Final code cleanup, removal of console logs, and addition of code comments for complex logic (e.g., `handleDragEnd`).

---

## Dependencies & Execution Order

- **Setup (Phase 1)** must complete before **Foundational (Phase 2)**.
- **Foundational (Phase 2)** must complete before any user story phase can begin.
- User Story phases (**Phase 3, 4, 5**) can technically be worked on in parallel by different developers after Phase 2 is complete, but a sequential P1 -> P2 -> P3 approach is recommended for a single developer.
- **Polish (Phase 6)** should be done after all desired user stories are implemented.

## Implementation Strategy

The recommended approach is **Incremental Delivery**.
1.  Complete **Phase 1 (Setup)** and **Phase 2 (Foundational)**.
2.  Implement **Phase 3 (User Story 1)** to deliver the MVP: creating and viewing tasks.
3.  Implement **Phase 4 (User Story 2)** to add task management capabilities.
4.  Implement **Phase 5 (User Story 3)** to add clean-up functionality.
5.  Complete **Phase 6 (Polish)**.
