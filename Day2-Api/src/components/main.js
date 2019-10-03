import React from 'react';
import axios from 'axios';

class Main extends React.Component {

    constructor() {
        super();
        console.log("Constructor created");
    }
    ////Local Url
    // state = {
    //     products: []
    // }

    //Using Typicode Url
    state = {
        posts: []
    }


    componentDidMount() {
        console.log("Component did mount");

        //Use Axios
        ////Local Url
        //     axios.get('http://localhost:53876/api/Products')
        //         //get all the data as promise in the response
        //         .then(response => {
        //             this.setState({
        //                 products: response.data
        //             })
        //         })
        //         //catch all the errors
        //         .catch(error => console.log(error)
        //         )
        // }

        //Using Typicode Url
        //Use Axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            //get all the data as promise in the response
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            //catch all the errors
            .catch(error => console.log(error)
            )
    }
    render() {
        console.log("App render");
        console.log(this.state);

        ////Local Url
        // if (this.state.products.length === 0) {
        //     return (
        //         <h2 style={{ textAlign: "center" }}> Loading ......</h2>
        //     )
        // }

        //Using Typicode Url
        if (this.state.posts.length === 0) {
            return (
                <h2 style={{ textAlign: "center" }}> Loading ......</h2>
            )
        }
        else {
            return (
                <div className="container">
                    <ul className="list-group">
                        {/* 
                        Local Url
                        {this.state.products.map(product => {
                            return (
                                <React.Fragment>
                                    <li className="list-group-item">{product.productId}</li>
                                    <li key={product.productId} className="list-group-item">{product.name}</li>
                                </React.Fragment>
                            )
                        })} */}

                        {/* ////Using Typicode Url */}
                        {this.state.posts.map(post => {
                            return (
                                <React.Fragment>
                                    <li key={post.id} className="list-group-item">{post.id}</li>
                                    <li className="list-group-item">{post.title}</li>
                                    <li className="list-group-item">{post.body}</li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
            )
        }

    }
}

export default Main;
