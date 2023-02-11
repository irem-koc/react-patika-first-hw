import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos , setTodos}) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} todos={todos} setTodos={setTodos}/>
            ))}
        </ul>
    );
}

export default TodoList;
