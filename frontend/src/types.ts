export type TaskId = string;
export type ColumnId = 'tasks' | 'meeting' | 'backburner';

export interface Task {
    id: TaskId;
    columnId: ColumnId;
    content: string;
    title?: string; // Optional since user requirement mentioned title, description, deadline. I'll stick to content/title for simplified view first or add them.
    description?: string;
    deadline?: string;
}

export interface Column {
    id: ColumnId;
    title: string;
}
