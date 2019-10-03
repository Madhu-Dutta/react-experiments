import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }
    }
    increament = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        // counter = counter + 1;
        // console.log(counter);
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
            </div>
        )
    }
}
export default Counter;
