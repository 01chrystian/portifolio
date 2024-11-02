import { useState } from "react";
import "./Counter.css";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const eventIncrement = () => setCount(count + 1);
    const eventDecrement = () => setCount(count - 1);

    return (
        <div className="counter-container">
            <div className="count-display">{count}</div>
            <button onClick={eventIncrement} className="button">+</button>
            <button onClick={eventDecrement} className="button">-</button>
        </div>
    );
}

export default CounterApp;