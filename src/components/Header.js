import React from "react";
import { useState } from "react";
function Header({ todos, setTodos }) {
    const [search, setSearch] = useState("");

    const addTodo = (e) => {
        if (e.key === "Enter" && search.trim().length > 0) {
            setSearch(e.target.value);
            let todo = {
                id: crypto.randomUUID(),
                text: search,
                done: false
            };
            setTodos([todo, ...todos]);
            setSearch("");
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input
                    type="text"
                    value={search}
                    onKeyDown={addTodo}
                    onChange={(e) => setSearch(e.target.value)}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                />
            </form>
        </header>
    );
}

export default Header;
