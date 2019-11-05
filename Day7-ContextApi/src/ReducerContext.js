import React, { useReducer } from 'react';
import { Button } from "reactstrap";

const initState = "Default Name";
const reducer = (state, action) => {
    switch (action) {
        case "CHANGE_NAME":
            return "Updated Name";
        default:
            return state;
    }
}
const ReducerContext = () => {
    const [name, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            <h1>Initial Name : {name}</h1>
            <Button color="primary" onClick={() => dispatch("CHANGE_NAME")}>Click Me</Button>

        </div>
    )
}

export default ReducerContext;