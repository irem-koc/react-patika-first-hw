import React, { useState } from "react";

function Footer({todos, filterTodos}) {
    
    return (
        <footer className="footer">
            <span className="todo-count">
                {todos.filter((todo)=>todo.done===false).length <= 1 ? todos.filter((todo)=>todo.done===false).length+" task" : todos.filter((todo)=>todo.done===false).length +" tasks"} left   
            </span>
            <ul className="filters">
                <li>
                    <a  href="#" onClick={() =>filterTodos("all")}>All</a>
                </li>
                <li>
                    <a href="#" onClick={() =>filterTodos("active")}>Active</a>
                </li>
                <li>
                    <a href="#" onClick={() =>filterTodos("completed") }>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={() => console.log(todos.filter((todo)=>todo.done===false).length)}>Clear completed</button>
        </footer>
    );
}

export default Footer;
