////Without using CONTEXT API (USING PROPS TO PASS VALUE FROM PARENT -> CHILD)
// import React, { Component } from 'react';
// import User from './User';

// export default class App extends Component {
//   state = {
//     userId: 1,
//     name: "Maddy"
//   }
//   render() {
//     return (
//       <div>
//         <h2>App Component</h2>
//         <User userId={this.state.userId} name={this.state.name} />
//       </div>
//     )
//   }
// }

////Use CONTEXT Api
import React, { Component } from 'react';
import User from './/User';
import {Provider} from './Context';

export default class App extends Component {
  state = {
    id: 1,
    name: 'Maddy'
  };
  //passing a function as context value
  handleClickContext = () => {
    this.setState({
      id: this.state.id + 1
    })
  }

  render() {
    const contextValue = {
      data : this.state,
      handleClickEvent: this.handleClickContext     
    };
    
    return (      
      //Provider contains value parameter which passes the values from one component to other
      <Provider value={contextValue}>
        <User />
      </Provider>
    )
  }
}


