import React, { useState } from "react";
import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            title: input,
            completed: false,
        };

        addTask(newTask);

        setTimeout(() => {
            setInput("");
        }, 50);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                className="task-input"
                type="text"
                placeholder="escribe una tarea..."
                name="task-text"
                value={input}
            />
            <button className="task-btn" type="submit">
                agregar tarea
            </button>
        </form>
    );
};

export default TaskForm;
