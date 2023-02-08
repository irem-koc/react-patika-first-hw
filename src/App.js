import { useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([
        {
            text: "Taste JavaScript",
            done: true,
        },
        {
            text: "Code furiously",
            done: true,
        },
        {
            text: "Promote Mavo",
            done: false,
        },
        {
            text: "Give talks",
            done: false,
        },
        {
            text: "Write tutorials",
            done: true,
        },
        {
            text: "Have a life!",
            done: false,
        },
    ]);
    const [searchValue, setSearchValue] = useState("")
    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <form>
                        <input onChange={(e)=>setSearchValue(e.target.value)} className="new-todo" placeholder="What needs to be done?" value={searchValue} autoFocus/>
                    </form>
                </header>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                      {
                        todos.map((todo, index)=>(
                          <li>
                            <div className="view">
                                <input className="toggle" type="checkbox" />
                                <label>{todo.text}</label>
                                <button className="destroy"></button>
                            </div>
                          </li>
                        ))
                      }
                        
                    </ul>
                </section>
                <footer className="footer">
                    <span className="todo-count">
                        <strong>0</strong> left
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
            </section>
        </div>
    );
}
export default App;
