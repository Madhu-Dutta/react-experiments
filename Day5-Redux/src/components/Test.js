import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeName: 'Chanda'
        }
    }
    render() {
        return (
            <div>
                <h2>Hi I am from Test Page: {this.props.name}</h2>
                {/* Child is changing data in parent component */}
                <button onClick={() => this.props.handleNameChangesInChild(this.state.homeName)}>
                    Change My HomeName
                </button>
            </div>
        )
    }
}
