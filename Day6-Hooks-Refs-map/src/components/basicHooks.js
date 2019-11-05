import React, {useState, useEffect} from 'react';
import useCustomHook from './customHook';

const BasicHooks = () => {   
    const data = useCustomHook();
    const [greet, setGreet] = useState('WELCOME!!!');
    const [name, setName] = useState('Maddy');
    const [count, setCount] = useState(0);
    const [countUp, setCountUp] = useState(0);
    const [countDwn, setCountDwn] = useState(0);
    
    const clickHello = () => {
        setGreet('Good Morning')
        setName('Maddy Chanda')
    }
    const clickCountUp = () => {
        setCount(count + 1);
    }
    const clickCountDown = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCountUp(countUp + 1);
    }
    const decrement = () => {
        setCountDwn(countDwn - 1);
    }
    const clickcustomIncrement = () => {
        data.handleIncrement();
    }
    const clickcustomDecrement = () => {
        data.handleDecrement();
    }
    useEffect(() => {
        console.log('Use effect called. UseEffect an replacement for using life cycle methods')
    }, [countUp]);

    return (
       <React.Fragment>
        <p>Hello World : {greet} {name}</p>
            <button onClick={() => clickHello()}> Hello </button>
        <div style={{padding: '5%'}}>
            <p>Count: {count}</p>
            <button onClick={() => clickCountUp()}> Count Up ^</button>
            <button onClick={() => clickCountDown()}> Count Down </button>
        </div>
        <div>
            <div  style={{padding: '5%'}}>CountUp: {countUp}</div>
                <button onClick={() => increment()}> Count Up ^</button>
            <div  style={{padding: '5%'}}>CountDown: {countDwn}</div>
                <button onClick={() => decrement()}> Count Down </button>
        </div>

        <div style={{padding: '5%'}}>
            <p>Count: {data.count}</p>
            <button onClick={() => clickcustomIncrement()}> Custom increment ^</button>
            <button onClick={() => clickcustomDecrement()}> Custom decrement </button>
        </div>
       </React.Fragment>
    )
}


export default BasicHooks;