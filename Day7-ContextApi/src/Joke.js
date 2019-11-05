import React, { useState, useEffect, useRef } from 'react';
import { Button } from "reactstrap";

const Joke = () => {
    const [joke, setJoke] = useState("loading...");
    const [fName, setfName] = useState("John");
    const [lName, setlName] = useState("Doe");
    // const inputFocus = useRef(null);
    const inputText = useRef(null);

//Fetch http://api.icndb.com/jokes/random api
    const newJoke = (fName, lName) => {
        fetch(`http://api.icndb.com/jokes/random?firstName=${fName}&lastName=${lName} `)
        .then(res => res.json())
        .then(res => {
            console.log(res.value.joke);
            setJoke(res.value.joke);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        newJoke(fName, lName);
        // inputFocus.current.focus();
    }, [fName, lName]);

    return (
        <div>
            Hello....
            <h6>{fName}{lName}</h6>
            <h3>{joke}</h3>

            <input type="text" value={fName} onChange={(e) => setfName(e.target.value)} ref={inputText} />
            <input type="text" value={lName} onChange={(e) => setlName(e.target.value)} ref={inputText} />

            <Button color="success" style={{ margin: '2%' }} onClick={() => setfName("Don")}>Change Name</Button>
            <Button color="success" style={{ margin: '2%' }} onClick={() => setlName("Quixote")}>Change LastName</Button>
            <Button color="success" style={{ margin: '2%' }} onClick={() => newJoke(fName, lName)}>Fetch Jokes</Button>
        </div>
    )
}
export default Joke;
