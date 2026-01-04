import { useState } from 'react';
import { Board } from '@/components/board/Board';
import { INITIAL_TASKS, INITIAL_COLUMNS } from '@/services/data';
import type { Task } from '@/types';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import { CreateTaskDialog } from '@/components/task/CreateTaskDialog';
import type { DragEndEvent } from '@dnd-kit/core';

function App() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddTask = (task: Task) => {
        setTasks((prev) => [...prev, task]);
    };

    const handleDeleteTask = (taskId: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== taskId));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        const task = tasks.find((t) => t.id === activeId);
        if (!task) return;

        // If dropping on a column
        if (INITIAL_COLUMNS.some((col) => col.id === overId)) {
            if (task.columnId !== overId) {
                setTasks((prev) =>
                    prev.map((t) =>
                        t.id === activeId ? { ...t, columnId: overId as any } : t
                    )
                );
            }
        }
    };

    return (
        <div className="flex flex-col h-screen w-full bg-zinc-50 dark:bg-zinc-950 font-sans text-foreground">
            <header className="shrink-0 h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
                        TM
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">TaskMan</h1>
                </div>
                <div className="flex items-center gap-2">
                    <Button size="sm" className="gap-2" onClick={() => setIsDialogOpen(true)}>
                        <Plus className="w-4 h-4" />
                        Add Task
                    </Button>
                    <CreateTaskDialog
                        open={isDialogOpen}
                        onOpenChange={setIsDialogOpen}
                        onAddTask={handleAddTask}
                    />
                </div>
            </header>
            <main className="flex-1 overflow-auto p-6">
                <div className="h-full">
                    <Board columns={INITIAL_COLUMNS} tasks={tasks} onDragEnd={handleDragEnd} onDeleteTask={handleDeleteTask} />
                </div>
            </main>
        </div>
    );
}

export default App;
