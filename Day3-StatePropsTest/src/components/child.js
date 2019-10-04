import React, { Component } from 'react';
import { Button } from "reactstrap";
import { PropTypes } from 'prop-types';

class ChildComp extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "MD", age: 30 }
    }

    changeName = () => {
        this.setState({
            name: "CD"
        }, () => this.props.cName(this.state.name));
    }

    render() {

        return (
            <div>
                Child prop counter display: {this.props.count}<br /><br />
                <div className="container">
                    <Button onClick={this.changeName}>Change Name</Button>
                </div>
                {/* 
                For Stateless Component
                Hi there I am counting from child component using Props
                counter value: {props.count} */}
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

ChildComp.defaultProps = {
    counter: 0
}
ChildComp.propTypes = {
    count: PropTypes.number,
    cName: PropTypes.func

}
export default ChildComp; 