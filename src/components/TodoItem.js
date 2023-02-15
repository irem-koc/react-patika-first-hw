import React from "react";

function TodoItem({ todo, todos,setTodos, setFiltredTodos, filtredTodos }) {
    const handleChange = (tod) => {
        let updatedTodos = filtredTodos.map((todo) => {
            if (todo.id === tod.id) {
                todo.done = !todo.done;
            }
            return todo;
        });
        setFiltredTodos(updatedTodos);
    };
    const deleteTodo = (id) =>{
        let updatedTodos = filtredTodos.filter((todo) => todo.id !==id);
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
