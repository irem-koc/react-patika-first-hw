import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [first, setFirst] = useState(false);
    const [filtredTodos, setFiltredTodos] = useState([]);
    useEffect(() => {
        setFiltredTodos(todos);
    }, [todos]);
    const filterTodos = (acc) => {
        if (acc == "completed") {
            setFiltredTodos(todos.filter((todo) => todo.done === true));
        } else if (acc == "active") {
            setFiltredTodos(todos.filter((todo) => todo.done === false));
        }else{
            setFiltredTodos(todos.filter((todo) => todo.id));
        }
    };
    const makeAllComplete = () => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id) {
                todo.done = !first;
                setFirst(!first);
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
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
                    <TodoList
                    todos={todos}
                    setTodos={setTodos}
                        filtredTodos={filtredTodos}
                        setFiltredTodos={setFiltredTodos}
                    />
                </section>
                <Footer
                    todos={filtredTodos}
                    filterTodos={filterTodos}

                />
            </section>
        </div>
    );
}
export default App;
