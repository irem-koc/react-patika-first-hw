import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ filtredTodos , setFiltredTodos, todos, setTodos}) {
    return (
        <ul className="todo-list">
            {filtredTodos.map((todo, index) => (
                <TodoItem todo={todo} key={index} todos={todos} setTodos={setTodos} filtredTodos={filtredTodos} setFiltredTodos={setFiltredTodos}/>
            ))}
        </ul>
    );
}

export default TodoList;
