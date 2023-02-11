import React from "react";

function TodoItem({ todo, todos, setTodos }) {
    const handleChange = (tod) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === tod.id) {
                todo.done = !todo.done;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    const deleteTodo = (id) =>{
        let updatedTodos = todos.filter((todo) => todo.id !==id);
        setTodos(updatedTodos)
    }

    return (
        <li key={todo.id} className={todo.done ? "completed":""}>
            <div className="view">
                <input
                    value={todo.done}
                    className={!todo.done ? "toggle":"toggle b"}
                    type="checkbox"
                    onClick={() => handleChange(todo)}
                />
                <label >{todo.text}</label>
                <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
            </div>
        </li>
    );
}

export default TodoItem;
