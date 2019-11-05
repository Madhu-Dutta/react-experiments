import {useState} from 'react';

export default function useCustomHook() {
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(count + 1)       
    }
    const handleDecrement = () => {
        setCount(count - 1)       
    }
    return{
        count,
        handleIncrement,
        handleDecrement
    }
}