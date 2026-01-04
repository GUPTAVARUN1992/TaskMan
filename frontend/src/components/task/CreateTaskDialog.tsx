import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Task } from "@/types";

// Simple ID generator if nanoid is not installed yet.
const generateId = () => Math.random().toString(36).substring(2, 9);

interface CreateTaskDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onAddTask: (task: Task) => void;
}

export function CreateTaskDialog({ open, onOpenChange, onAddTask }: CreateTaskDialogProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        const newTask: Task = {
            id: generateId(),
            columnId: 'tasks', // Default to 'tasks' column
            content,
            title: title || "Untitled",
            deadline: deadline || undefined,
        };

        onAddTask(newTask);
        onOpenChange(false);
        setTitle("");
        setContent("");
        setDeadline("");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <label htmlFor="title" className="text-sm font-medium">Title</label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Task title"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="content" className="text-sm font-medium">Description</label>
                        <Textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="What needs to be done?"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="deadline" className="text-sm font-medium">Deadline (Optional)</label>
                        <Input
                            id="deadline"
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Add Task</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
