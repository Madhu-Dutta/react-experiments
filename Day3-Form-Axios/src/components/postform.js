import React from 'react';
import axios from 'axios';


const base_url = "https://jsonplaceholder.typicode.com";

class Postform extends React.Component {

    state = {
        title: "",
        body: "",
        userId: "111",
        isSubmitted: false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();

        axios.post(`${base_url}/posts`, {
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
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
                        name="title"
                        value={this.state.title}
                        placeholder="Enter your title"
                        onChange={this.changeHandler}
                    />
                    <textarea
                        className="form-control"
                        name="body"
                        placeholder="Enter your text"
                        value={this.state.body}
                        onChange={this.changeHandler}
                    />
                    <button type="submit" className="btn btn-success">Submit</button>

                    {this.state.isSubmitted && <p>Form submitted successfully</p>}
                    {this.state.err && <p>Error in submitting the form</p>}


                </form>

            </div>
        )
    }

}
export default Postform;