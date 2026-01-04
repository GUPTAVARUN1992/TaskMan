import type { Task } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface TaskCardProps {
    task: Task;
    onDelete: (id: string) => void;
}

export function TaskCard({ task, onDelete }: TaskCardProps) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: task.id,
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab hover:shadow-lg transition-all duration-200 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-sm group">
            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-sm font-semibold leading-none text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pt-1">
                        {task.title || "Untitled"}
                    </CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 -mt-1 -mr-2 text-zinc-400 hover:text-red-500 hover:bg-transparent"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent drag start when clicking delete
                            onDelete(task.id);
                        }}
                        onPointerDown={(e) => e.stopPropagation()} // Prevent dnd-kit from capturing pointer down
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-2">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 mb-3">
                    {task.content}
                </p>
                {task.deadline && (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-red-500 transition-colors">
                        <Calendar className="w-3 h-3" />
                        <span>{task.deadline}</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
