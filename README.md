# TaskMan

TaskMan is a modern, local-first Task Manager web application designed to help you organize your work efficiently with a simple Kanban-style board.

## Features

- **Kanban Board Layout**: Visualize your workflow with three dedicated columns:
  - **Tasks**: For your active to-do items.
  - **Meetings**: To keep track of your schedule.
  - **Backburner**: For tasks that are on hold.
- **Task Management**:
  - Create tasks with a title, description, and deadline.
  - Edit and manage task details easily.
  - Delete completed or irrelevant tasks.
- **Drag and Drop Interface**: Smoothly move tasks between columns using a modern drag-and-drop interaction powered by `dnd-kit`.
- **Local Persistence**: All your data is saved automatically to your browser's local storage—no account or login required.
- **Responsive Design**: Built with a mobile-friendly, modern UI using Tailwind CSS and shadcn/ui.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Drag & Drop**: [dnd-kit](https://dndkit.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (or yarn/pnpm)

### Installation

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and visit `http://localhost:5173` (or the URL shown in your terminal).

## Usage

- **Add a Task**: Click the "Example" button or the column header actions to create a new item.
- **Move a Task**: Click and hold a task card to drag it to a different column.
- **Delete a Task**: Click the trash icon on a task card to remove it permanently.
