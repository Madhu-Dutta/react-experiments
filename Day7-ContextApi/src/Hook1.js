import React, { useState, useEffect } from 'react';
import { Button } from "reactstrap";

const Hook1 = () => {
    let [name, SetName] = useState("initialState Name");
    let [age, SetAge] = useState(20);

    useEffect(() => {
        console.log("use effect demo: a mixture between componentdidmount and component update");
    }, [age]);
    return (
        <div className="container" text-align="center">
            <h1>Use State Hook</h1>
            <h3>{name}</h3>
            <h3>{age}</h3>

            <Button color="success" style={{ margin: '2%' }} onClick={() => SetName("New Name")}>Change Name</Button>
            <Button color="success" style={{ margin: '2%' }} onClick={() => SetAge(age++)}>Change Age</Button>
        </div >
    )
}
export default Hook1;
