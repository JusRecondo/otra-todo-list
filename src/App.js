import { useLayoutEffect } from "react";
import "./App.css";
import ChangeBackground from "./components/changeBackground/ChangeBackground";
import TodoList from "./components/todoList/TodoList";
import { getItemFromLocalStorage, changeBodyClass } from "./lib/utilities";

const App = ()  =>{
    
    useLayoutEffect(() => {
        const localStorageBg = getItemFromLocalStorage("bg");
        if (localStorageBg) {
            changeBodyClass(localStorageBg);
        }
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>lista de tareas</h1>
            </header>
            <main>
                <TodoList />
            </main>
            <footer>
                <ChangeBackground />
                <small>
                    <a
                        href="https://jusrecondo.web.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Hecho con 🖤 por jus recondo
                    </a>
                </small>
            </footer>
        </div>
    );
}

export default App;
