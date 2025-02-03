import { useState } from "react";
import "../style.css";

const Counter = () => {
    const [count, setCounter] = useState(0);
    return (
        <>
            <div className="container">
                <div>
                    <h1 className="number"> Counter : {count}</h1>
                </div>
                <div className="btns-container">
                    <button className="increment" onClick={() => setCounter(count + 1)}>Increment</button>
                    <button className="decrement" onClick={() => setCounter(count - 1)}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Counter