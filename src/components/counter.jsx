import { useEffect, useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        props.onSumChange(+1)
        return setCount(count + 1)
    };
    const handleDecrease = () => {
        props.onSumChange(-1)
        return setCount(count - 1)
    };
    useEffect(() => {
        props.onSumChange(0)
        return () => {
            props.onSumChange(-count)
        }
    });
    return (<div>
        <button onClick={handleIncrease}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrease}>-</button>
    </div>);
}
export default Counter;