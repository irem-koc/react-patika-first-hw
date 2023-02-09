import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <section className="todoapp">
                <Header todos={todos} setTodos={setTodos} />
                <section className="main">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                    />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <TodoList todos={todos} setTodos={setTodos} />
                </section>
                <Footer todos={todos} setTodos={setTodos} />
            </section>
        </div>
    );
}
export default App;
