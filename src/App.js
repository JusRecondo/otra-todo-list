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
                        href="https://github.com/JusRecondo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        jr
                    </a>
                </small>
            </footer>
        </div>
    );
}

export default App;
