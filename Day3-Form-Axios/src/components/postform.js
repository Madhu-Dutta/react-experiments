import React from 'react';
import axios from 'axios';


const base_url = "http://localhost:40444/api/members";

class Postform extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        isSubmitted: false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:40444/api/members", {
            firstName: this.state.firstName
        })
            .then(res => {
                this.setState({
                    isSubmitted: true,
                    err: false
                })
                console.log(res);
                // e.target.reset();
            })
            .catch(err => {
                this.setState({
                    err: true,
                    isSubmitted: false
                })
            })
    }
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                        className="form-control"
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="Enter your firstName"
                        onChange={this.changeHandler}
                    />
                    {/* <textarea
                        className="form-control"
                        name="body"
                        placeholder="Enter your text"
                        value={this.state.body}
                        onChange={this.changeHandler}
                    /> */}
                    <button type="submit" className="btn btn-success">Submit</button>

                    {this.state.isSubmitted && <p>Form submitted successfully</p>}
                    {this.state.err && <p>Error in submitting the form</p>}


                </form>

            </div>
        )
    }

}
export default Postform;