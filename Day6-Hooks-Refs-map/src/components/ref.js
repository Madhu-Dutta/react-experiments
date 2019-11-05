import React, { Component } from 'react';

export default class Ref extends Component {
    constructor(props){
        super(props);
        this.state ={
            value: ""
        }
        //Create ref
        this.textInput = React.createRef();
        this.textInputValue = React.createRef();

    }
    //Focus the input box
    componentDidMount = () =>{
        console.log(this.textInput.current);
        this.textInput.current.focus();
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log("clicked");      
        console.log(this.textInputValue.current.value);   
        this.setState({value: this.textInputValue.current.value})     
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input type="text" ref={this.textInputValue}/>
                <h2>Print Name: {this.state.value}</h2><br/><br/>

                <label>Password: </label>
                {/* Attaching ref attribute */}
                <input type="password" ref={this.textInput}/><br/><br/>

                <label>Address: </label>
                <input type="text" /><br/><br/>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
