import React, { useContext } from 'react';

const NameContext = React.createContext()
const AgeContext = React.createContext()

const Code3 =()=> {    
    const name = useContext(NameContext)
    const age = useContext(AgeContext)
    return(
        <React.Fragment>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
        </React.Fragment>
    )
}
const Code2 = () => {
    return (
        <Code3 />
    )
}
const Code = () => {
    return (        
        <Code2 />
    )
}

const UseContextExample = () => {
    return (
        <NameContext.Provider value={ "MD" }>
            <AgeContext.Provider value={ 20 }>
                <div>
                    <Code />
                </div>
            </AgeContext.Provider>
        </NameContext.Provider>
    )
}

export default UseContextExample;