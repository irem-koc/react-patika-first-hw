import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>
                    Task number
                </strong>{" "}
                left
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
