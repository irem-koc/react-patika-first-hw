import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [first, setFirst] = useState(false)
    const makeAllComplete = () => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id) {
                // setFirst(!first)
                todo.done = !first;
                setFirst(!first)
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <section className="todoapp">
                <Header todos={todos} setTodos={setTodos} />
                <section className="main">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                        onClick={makeAllComplete}
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
