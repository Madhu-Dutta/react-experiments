import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class Main extends React.Component {

    constructor() {
        super();
        console.log("Constructor created");
    }

    state = {
        email: '',
        membershipType: '',
        title: "",
        firstName: "",
        lastName: "",
        dob: "",
        streetAddress: "",
        suburb: "",
        state: "",
        dogHistory: "",
        members: []
    }

    componentDidMount() {
        console.log("Component did mount");

        ////Local Url
        axios.get('http://dgha-backend-aus-east.azurewebsites.net/api/members')
            //get all the data as promise in the response
            .then(response => {
                this.setState({
                    members: response.data
                })
            })
            //catch all the errors
            .catch(error => console.log(error)
            )
    }

    handleChange = e => {
        e.preventDefault();

        //Grab the input fields here
        let inputName = e.target.name;
        let inputValue = e.target.value;

        // //Handle change events on input fields
        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            membershipType: this.state.membershipType,
            title: this.state.title,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            streetAddress: this.state.streetAddress,
            suburb: this.state.suburb,
            state: this.state.state,
            dogHistory: this.state.dogHistory,
        }
        axios.post(`http://dgha-backend-aus-east.azurewebsites.net/api/members`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {

        //Using local Url
        if (this.state.members.length === 0) {
            return (
                <h2 style={{ textAlign: "center" }}> Loading ......</h2>
            )
        }
        else {
            return (

                <div className="container">
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                title:
            <input type="text" name="title" onChange={this.handleChange} />
                            </label>
                            <label>
                                First Name:
            <input type="text" name="firstName" onChange={this.handleChange} />
                            </label>
                            <label>
                                Last Name:
            <input type="text" name="lastName" onChange={this.handleChange} />
                            </label>
                            <label>
                                email:
            <input type="text" name="email" onChange={this.handleChange} />
                            </label>
                            <label>
                                membershipType:
            <input type="text" name="membershipType" onChange={this.handleChange} />
                            </label>
                            <label>
                                dob:
            <input type="text" name="dob" onChange={this.handleChange} />
                            </label>
                            <label>
                                streetAddress:
            <input type="text" name="streetAddress" onChange={this.handleChange} />
                            </label>
                            <label>
                                suburb:
            <input type="text" name="suburb" onChange={this.handleChange} />
                            </label>
                            <label>
                                state:
            <input type="text" name="state" onChange={this.handleChange} />
                            </label>
                            <label>
                                dogHistory:
            <input type="text" name="dogHistory" onChange={this.handleChange} />
                            </label>

                            <button type="submit">Add</button>
                        </form>
                    </div>

                    <Table dark className="table-container">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>FirstName</td>
                                <td>lastName</td>
                                <td>email</td>
                                <td>state</td>
                                <td>membershipType</td>
                                <td>suburb</td>
                                <td>Dob</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.members.map(member => {
                                return (
                                    <tr key={member.memberId}>
                                        <td >{member.memberId}</td>
                                        <td>{member.title}</td>
                                        <td>{member.firstName}</td>
                                        <td>{member.lastName}</td>
                                        <td>{member.email}</td>
                                        <td>{member.state}</td>
                                        <td>{member.membershipType}</td>
                                        <td>{member.suburb}</td>
                                        <td>{member.dob}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            )
        }

    }
}

export default Main;
