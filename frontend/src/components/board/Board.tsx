import type { Task, Column as ColumnType } from "@/types";
import { Column } from "@/components/column/Column";
import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import type { DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { TaskCard } from "@/components/task/TaskCard";
import { useState } from "react";

interface BoardProps {
    columns: ColumnType[];
    tasks: Task[];
    onDragEnd: (event: DragEndEvent) => void;
    onDeleteTask: (id: string) => void;
}

export function Board({ columns, tasks, onDragEnd, onDeleteTask }: BoardProps) {
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        setActiveId(null);
        onDragEnd(event);
    };

    const activeTask = tasks.find(t => t.id === activeId);

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="flex gap-6 h-full overflow-x-auto items-start pb-4">
                {columns.map(col => (
                    <Column
                        key={col.id}
                        column={col}
                        tasks={tasks.filter(t => t.columnId === col.id)}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </div>
            <DragOverlay>
                {activeTask ? <TaskCard task={activeTask} onDelete={() => { }} /> : null}
            </DragOverlay>
        </DndContext>
    );
}
