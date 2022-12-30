import { useCallback, useReducer } from 'react';
import { ACTIONS } from '../lib/constants';
import { v4 as uuidv4 } from 'uuid';

export const useTodos = () => {
    const reducer = (todos, action) => {
        switch (action.type) {
            case ACTIONS.INITIALIZE_TODOS:
                return [...action.payload.initalTodos];

            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payload.title)];

            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete };
                    }
                    return todo;
                });

            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id);

            case ACTIONS.UPDATE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            title: action.payload.title,
                            complete: false,
                        };
                    }
                    return todo;
                });

            default:
                return todos;
        }
    };

    function newTodo(title) {
        return { id: uuidv4(), title: title, complete: false };
    }

    const [todos, dispatch] = useReducer(reducer, []);

    const initializeTodos = useCallback((initialTodos) => {
        dispatch({
            type: ACTIONS.INITIALIZE_TODOS,
            payload: { initalTodos: initialTodos }
        })
    }, []);

    const addTodo = useCallback((title) => {
        dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title } });
    }, []);

    const deleteTodo = useCallback((id) => {
        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: id },
        })
    }, []);

    const toggleTodo = useCallback((id) => {
        dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: id },
        })
    }, []);

    const updateTodo = useCallback((id, title) => {
        dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: id, title: title } });
    }, []);

    return {
        todos,
        initializeTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
    };
};
