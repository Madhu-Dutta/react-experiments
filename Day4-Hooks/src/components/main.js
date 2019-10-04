import React, { useState } from 'react';
import { Button } from "reactstrap";
const Main = () => {
    const [age, setAge] = useState(10);
    return (
        <div>
            <h2>{age}</h2>
            <Button onClick={() => setAge(age + 1)}>Increment Age</Button>
        </div>
    )
}


export default Main;