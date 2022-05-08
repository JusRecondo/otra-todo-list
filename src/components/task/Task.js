import React from "react";
import "./Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({ taskId, taskTitle, completed, completeTask, deleteTask }) => {
    return (
        <article
            className={
                completed ? "task-container completed" : "task-container"
            }
        >
            <h3 className="task-title" onClick={() => completeTask(taskId)}>
                {taskTitle}
            </h3>
            <button
                className="task-delete-btn"
                onClick={() => deleteTask(taskId)}
            >
                <AiOutlineCloseCircle className="task-icon" />
            </button>
        </article>
    );
};

export default Task;
