import React, { Component } from 'react';

class Ref extends Component {
    headerRef = React.createRef();
    componentDidMount() {
        console.log(this.headerRef.current.innerHTML);
    }
    render() {
        return (
            <div className="container">
                <h4 ref={this.headerRef}>Reference Example. Why we use ref?</h4>
                <p>Looks like the process is similar to selecting a js element in DOM, like in vanilla javascript.</p>
            </div>
        )
    }
}
export default Ref;