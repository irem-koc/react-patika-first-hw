import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index}/>
            ))}
        </ul>
    );
}

export default TodoList;
