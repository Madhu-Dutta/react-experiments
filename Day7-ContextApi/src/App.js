import React from 'react';
import Hook1 from './Hook1';
import Joke from './Joke';
// import ContextExample from './ContextExample';
// import UseContextExample from './UseContextExample';
import ReducerContext from './ReducerContext';

import Ref from './Ref';

import { Button } from "reactstrap";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Default Name"
    }
    this.variable = "Some props";
  }

  componentDidMount() {
    console.log(this.state.name);
  }
  componentDidUpdate(prevProps, prevstate) {
    console.log("Updated State On button click: ", prevProps, prevstate);
  }
  render() {

    return (
      <div className="container" text-align="center">
        <header className="App-header">
          <h2 text-align="center">React Playground</h2>
        </header>
        <Button color="primary" onClick={() => this.setState({ name: "Jim" })}>Click Me</Button>

        <Hook1 />
        <Joke />
        <Ref />
        {/* <ContextExample /> */}
        <UseContextExample /> 
        <ReducerContext />

      </div>
    );
  }
}

export default App;
