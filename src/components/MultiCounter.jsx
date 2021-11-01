import { useState } from "react"
import CounterGenerator from "./CounterGenerator"
import CounterGroup from "./CounterGroup"
import CounterGroupSum from "./CounterGroupSum"

const MultiCounter = () => {
    const [size, setSize] = useState(0)
    const [sum, setSum] = useState(0)

    return (
        <div>
            <CounterGenerator onGenerate={value => setSize(value)} />
            <CounterGroupSum sum={sum} />
            <CounterGroup
                size={size}
                onSumChange={num => setSum(sum + num)}
            />
        </div>
    )
}

export default MultiCounter