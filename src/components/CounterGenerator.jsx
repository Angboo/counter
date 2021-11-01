import {useState} from "react"

const CounterGenerator = (props) => {
    const [size, setSize] = useState(0);
    return (<div>
        <input onChange={event => setSize(Number(event.target.value))} defaultValue={size}/>
        <button onClick={() => props.onGenerate(size)}>generate</button>
    </div>)
}

export default CounterGenerator;