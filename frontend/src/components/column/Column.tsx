import type { Column as ColumnType, Task } from "@/types";
import { TaskCard } from "@/components/task/TaskCard";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
    column: ColumnType;
    tasks: Task[];
    onDeleteTask: (id: string) => void;
}

export function Column({ column, tasks, onDeleteTask }: ColumnProps) {
    const { setNodeRef } = useDroppable({
        id: column.id,
    });

    return (
        <div className="flex flex-col w-[350px] shrink-0">
            <div className="flex items-center justify-between mb-4 px-1">
                <h2 className="font-bold text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    {column.title}
                </h2>
                <span className="text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 px-2.5 py-1 rounded-md">
                    {tasks.length}
                </span>
            </div>

            <div
                ref={setNodeRef}
                className="flex-1 flex flex-col gap-3 p-1 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/20 border border-transparent"
            >
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} onDelete={onDeleteTask} />
                ))}
                {tasks.length === 0 && (
                    <div className="flex items-center justify-center h-32 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                        <p className="text-xs text-zinc-400">No tasks</p>
                    </div>
                )}
            </div>
        </div>
    );
}
