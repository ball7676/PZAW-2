import { useState, type ChangeEvent } from "react";
import "./App.css";

export interface Task {
    id: number;
    name: string;
    completed: boolean;
}

type TaskListProps = {
    tasks: Task[];
    onToggleTask: (taskId: number) => void;
};

function TaskList({ tasks, onToggleTask }: TaskListProps) {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleTask(task.id)}/>
                        <span className={task.completed ? "task-name completed" : "task-name"}>
                            {task.name}
                        </span>
                        <span className="task-status">
                            {task.completed ? " Wykonane" : " Niewykonane"}
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    );
}

type TaskFilter = "all" | "completed" | "incomplete";
type TaskSort = "original" | "alphabetical" | "status";

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [nextTaskId, setNextTaskId] = useState(1);
    const [newTaskName, setNewTaskName] = useState("");
    const [filter, setFilter] = useState<TaskFilter>("all");
    const [sort, setSort] = useState<TaskSort>("original");

    function handleToggleTask(taskId: number) {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task,
            ),
        );
    }

    function handleNewTaskNameChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskName(event.target.value);
    }

    function handleFilterChange(event: ChangeEvent<HTMLSelectElement>) {
        setFilter(event.target.value as TaskFilter);
    }

    function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
        setSort(event.target.value as TaskSort);
    }

    function handleAddTask(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        const name = newTaskName.trim();

        if (!name) return;

        setTasks((currentTasks) => [
            ...currentTasks,
            { id: nextTaskId, name, completed: false },
        ]);
        setNextTaskId((currentId) => currentId + 1);
        setNewTaskName("");
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    const visibleTasks = [...filteredTasks];
    if (sort === "alphabetical") {
        visibleTasks.sort((a, b) => a.name.localeCompare(b.name, "pl"));
    } else if (sort === "status") {
        visibleTasks.sort((a, b) => Number(a.completed) - Number(b.completed));
    }

    const incompleteTaskCount = tasks.filter((task) => !task.completed).length;

    return (
        <main className="task-app">
            <h1>Lista zadań</h1>

            <form className="task-form" onSubmit={handleAddTask}>
                <label className="visually-hidden" htmlFor="new-task">
                    Nowe zadanie
                </label>
                <input
                    id="new-task"
                    type="text"
                    value={newTaskName}
                    onChange={handleNewTaskNameChange}
                    placeholder="Wpisz nowe zadanie"/>
                <button type="submit" disabled={!newTaskName.trim()}>
                    Dodaj zadanie
                </button>
            </form>

            <div className="task-controls">
                <label>
                    Filtruj
                    <select
                        value={filter}
                        onChange={handleFilterChange}>
                        <option value="all">Wszystkie</option>
                        <option value="completed">Wykonane</option>
                        <option value="incomplete">Niewykonane</option>
                    </select>
                </label>
                <label>
                    Sortuj
                    <select
                        value={sort}
                        onChange={handleSortChange}>
                        <option value="original">Oryginalny porządek</option>
                        <option value="alphabetical">Alfabetycznie</option>
                        <option value="status">Według stanu</option>
                    </select>
                </label>
            </div>

            {visibleTasks.length > 0 ? (
                <TaskList tasks={visibleTasks} onToggleTask={handleToggleTask} />
            ) : (
                <p className="empty-list">Brak zadań do wyświetlenia.</p>
            )}
            <p>Liczba niewykonanych zadań: {incompleteTaskCount}</p>
        </main>
    );
}