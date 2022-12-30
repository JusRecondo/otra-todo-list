import React from "react";
import "./TodoForm.css";

const TodoForm = ({ handleSubmit, handleChange, editMode, todoTitle }) => {

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                className="todo-input"
                type="text"
                placeholder="escribe una tarea..."
                name="todo-text"
                value={todoTitle}
            />
            <button className="submit-btn" type="submit">
                {editMode ? 'Guardar' : 'Agregar'}
           </button>
        </form>
    );
};

export default TodoForm;
