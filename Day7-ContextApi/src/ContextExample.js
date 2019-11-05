import React from 'react';

const codeContext = React.createContext();

const Code3 = () => {
    return (
        <codeContext.Consumer>
            {
                (data) => {
                    return (
                        <React.Fragment>
                            <h1>Hello {data.name} Age: {data.age}</h1>
                        </React.Fragment>
                    )
                }
            }
        </codeContext.Consumer>
    )
}
const Code2 = () => {
    return (
        <div>
            <codeContext.Consumer>
                {
                    (data) => {
                        return (
                            <React.Fragment>
                                <h1>Hello {data.name} Age: {data.age}</h1>
                            </React.Fragment>
                        )
                    }
                }
            </codeContext.Consumer>
            <Code3 />
        </div>

    )
}
const Code = () => {
    return (
        <div>
            <Code2 />
        </div>
    )
}

const ContextExample = () => {
    return (
        <codeContext.Provider value={{ name: "MD", age: 30 }}>
            <div>
                <Code />
            </div>
        </codeContext.Provider>

    )
}

export default ContextExample;