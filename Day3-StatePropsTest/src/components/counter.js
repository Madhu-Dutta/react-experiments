import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ChildComp from "./child";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 1,
            name: ''
        }
    }
    increament = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        // counter = counter + 1;
        // console.log(counter);
    }
    change = (newName) => {
        this.setState({ name: newName })
    }

    render() {
        return (
            <div>
                <Button className="talk"
                    variant="contained"
                    color="primary"
                    onClick={() => this.increament()}
                >
                    Count
                </Button>
                <p>{this.state.counter}</p>

                <ChildComp count={this.state.counter} cName={this.change} />

            </div>
        )
    }
}
export default Counter;
