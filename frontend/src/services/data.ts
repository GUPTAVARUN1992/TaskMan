import type { Task, Column } from '../types';

export const INITIAL_COLUMNS: Column[] = [
    { id: 'tasks', title: 'Tasks' },
    { id: 'meeting', title: 'Meeting' },
    { id: 'backburner', title: 'Backburner' },
];

export const INITIAL_TASKS: Task[] = [
    {
        id: '1',
        columnId: 'tasks',
        content: 'Review spec document',
        title: 'Review Spec',
        description: 'Go through the requirements deeply.',
        deadline: '2026-01-05'
    },
    {
        id: '2',
        columnId: 'meeting',
        content: 'Daily Sync',
        title: 'Daily Sync',
        description: 'Sync with the team on progress.'
    },
    {
        id: '3',
        columnId: 'backburner',
        content: 'Clean up old branch',
        title: 'Cleanup',
    },
];
