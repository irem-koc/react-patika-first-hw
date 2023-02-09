import React from "react";

function TodoItem({todo}) {
    return (
        <li key={todo.id}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.text}</label>
                <button className="destroy"></button>
            </div>
        </li>
    );
}

export default TodoItem;
