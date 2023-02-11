import React from "react";

function Footer({todos}) {
    return (
        <footer className="footer">
            <span className="todo-count">
                {todos.filter((todo)=>todo.done===false).length} left   
            </span>
            <ul className="filters">
                <li>
                    <a>All</a>
                </li>
                <li>
                    <a>Active</a>
                </li>
                <li>
                    <a>Completed</a>
                </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;
