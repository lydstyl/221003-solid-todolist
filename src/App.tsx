import type { Component } from "solid-js"
import todolist from "./todolist"

import logo from "./logo.svg"
import styles from "./App.module.css"

const App: Component = () => {
    return (
        <div class={styles.App}>
            <pre>{JSON.stringify(todolist, null, 4)}</pre>

            <ul>
                <li>options</li>
            </ul>
        </div>
    )
}

export default App
