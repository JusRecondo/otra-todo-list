import { useState, useLayoutEffect } from "react";
import "./App.css";
import ChangeBackground from "./components/changeBackground/ChangeBackground";
import Tasks from "./components/tasks/Tasks";
import { checkLang, languages } from "./modules/languages";
import { getItemFromLocalStorage, changeBodyClass } from "./modules/utilities";

function App() {
    /* const [language, setLanguage] = useState("english"); */

    useLayoutEffect(() => {
        /* setLanguage(checkLang()); */

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
                <Tasks />
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
