import { useState } from "react";
import "../style.css";

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim() === "") return; // Add validation to avoid adding empty todos

        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 10), // Corrected Math.random() usage
            });
        });

        setInput(""); // Clear input after submitting
    };

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(t => t.id !== id));
    };

    return (
        <>
            <div className="container">
                <input 
                    type="text" 
                    placeholder="New todo" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={handleSubmit}>Submit</button>
                <ul className="todos-list">
                    {todos.map(({ text, id }) => {
                        return (
                            <li className="todo" key={id}>
                                <span>{text}</span>
                                <button className="close" onClick={() => removeTodo(id)}>X</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Todolist;
