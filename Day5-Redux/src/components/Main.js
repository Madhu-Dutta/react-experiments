import React from 'react';
import Test from './Test';
import Profile from './Profile';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Maddy'
        }
    }
    changeName = (name) => {
        this.setState({
            name: name
        })
    }
    render() {
        return (
            <React.Fragment>
            <h1>Hi I am from Main App {this.state.name}</h1>
            {/* Which child will be changing data in the parent is assigned here with the changeName handler */}
           <Test handleNameChangesInChild = {(name) => this.changeName(name)} />
           {/* Passing just an attribute in child page */}
           <Profile name={this.state.name}/>
            </React.Fragment>
        )
    }
}
export default Main;