import React from 'react';
import './Todo.css';
import { MdDeleteForever, MdModeEditOutline } from 'react-icons/md';

const Todo = ({
    todo,
    handleEdit,
    editMode,
    toggleTodo,
    deleteTodo
}) => {
    return (
        <article
            className={`${todo.complete ? 'todo-container completed' : 'todo-container'} ${editMode ? 'editing': ''}`}
        >
            <h3
                className="todo-title"
                onClick={() =>
                    toggleTodo(todo.id)
                }
            >
                {todo.title}
            </h3>
            <button className="todo-btn" onClick={() => handleEdit(todo)}>
                <MdModeEditOutline className="todo-icon" />
            </button>
            <button
                className="todo-btn"
                onClick={() =>
                    deleteTodo(todo.id)
                }
            >
                <MdDeleteForever className="todo-icon" />
            </button>
        </article>
    );
};

export default Todo;
