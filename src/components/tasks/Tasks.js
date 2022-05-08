import React, { useState, useEffect, useLayoutEffect } from "react";
import Task from "../task/Task";
import TaskForm from "../taskForm/TaskForm";
import "./Tasks.css";
import {
    setItemInLocalStorage,
    getItemFromLocalStorage,
} from "../../modules/utilities";

const Tasks = () => {
    const [tasksList, setTasksList] = useState([]);

    const addTask = (task) => {
        if (task.title) {
            task.title = task.title.trim();
            setTasksList([task, ...tasksList]);
        }
    };

    const completeTask = (id) => {
        const updatedTasks = tasksList.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });

        setTasksList(updatedTasks);
    };

    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task) => task.id !== id));
    };

    useLayoutEffect(() => {
        const localStorageTodoList = getItemFromLocalStorage("todo-list");
        if (localStorageTodoList && localStorageTodoList.length > 0) {
            setTasksList(localStorageTodoList);
        }
    }, []);

    useEffect(() => {
        setItemInLocalStorage("todo-list", tasksList);
    }, [tasksList]);

    return (
        <section className="tasks-container">
            <h2>tareas</h2>
            {tasksList.map((task) => (
                <Task
                    taskId={task.id}
                    taskTitle={task.title}
                    completed={task.completed}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    key={task.id}
                />
            ))}
            <TaskForm addTask={addTask} />
        </section>
    );
};

export default Tasks;
