import React,{useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)
    const tags = []
    const formCount = () => {
        return count === 0 ? 'Ноль' : count
    }
    const getBagecclasses = () => {
    let classec = 'badge m-2 bg-'
    classec += count === 0 ? 'danger' : 'primary'
    return classec
    }
    
    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleDecrement = () => {
        count === 0 ? setCount(count) : setCount(count-1)
    }

    return ( 
     <>
        <span className = {getBagecclasses()}>{formCount()}</span>
        <button onClick = {handleIncrement} className = 'btn btn-secondary btn-sm'>Increment</button>
        <button onClick = {handleDecrement} className = 'btn btn-secondary btn-sm'>Decrement</button>
     </> 
     );
}
 
export default Counter;