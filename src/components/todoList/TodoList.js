import React, { useState, useEffect } from 'react';
import Todo from '../todo/Todo';
import TodoForm from '../todoForm/TodoForm';
import './TodoList.css';
import {
    setItemInLocalStorage,
    getItemFromLocalStorage,
} from '../../lib/utilities';
import { useTodos } from '../../hooks/useTodos';

const TodoList = () => {
    const {
        todos,
        initializeTodos,
        addTodo,
        deleteTodo,
        toggleTodo,
        updateTodo,
    } = useTodos();
    const [title, setTitle] = useState('');
    const [editMode, setEditMode] = useState({ id: null, status: false });

    //Get initial todos from localStorage
    useEffect(() => {
        const localStorageTodoList = getItemFromLocalStorage('todo-list');
        if (localStorageTodoList && localStorageTodoList.length > 0) {
            initializeTodos(localStorageTodoList);
        }
    }, []);

    //Save todos in localStorage
    useEffect(() => {
        setItemInLocalStorage('todo-list', todos);
    }, [todos]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!editMode.status) {
            addTodo(title);
        } else {
            updateTodo(editMode.id, title);
            setEditMode({ id: null, status: false });
        }
        setTitle('');        
    }

    function handleEdit(todo) {
        setTitle(todo.title);
        setEditMode({ id: todo.id, status: true });
    }

    function handleChange(e) {
        setTitle(e.target.value);
    }

    return (
        <section className="todos-container">
            <h2>tareas</h2>
            {todos.length ?
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        handleEdit={handleEdit}
                        editMode={editMode.id === todo.id}
                    />
                ))
            :
            null }
            <TodoForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                editMode={editMode.status}
                todoTitle={title}
            />
        </section>
    );
};

export default TodoList;
