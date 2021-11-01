import Counter from "./Counter"

const CounterGroup = (props) => {
    return new Array(Number(props.size))
        .fill(0)
        .map((_item, index) => {
            return <Counter
                key={index}
                onSumChange={props.onSumChange}
            />;
        })

}
export default CounterGroup;