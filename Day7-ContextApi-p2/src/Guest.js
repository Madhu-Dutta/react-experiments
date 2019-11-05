//  import React, { Component } from 'react'

//  export default class Guest extends Component {
//      render() {
//          return (
//              <div>
//                  <h5>Guest Component: 
//                  <table>
//                          <thead>
//                              <tr>
//                                  <th>UserId</th>
//                                  <th>Name</th>
//                              </tr>
//                          </thead>
//                          <tbody>
//                              <tr>
//                                  <td>{this.props.id}</td>
//                                  <td>{this.props.nm}</td>
//                              </tr>
//                          </tbody>                        
//                      </table>
//                  </h5>
//              </div>
//          )
//      }
//  }

////Using Context.Consumer
import React, { Component } from 'react'
import {Consumer} from './Context';

export default class Guest extends Component {
    render() {
        return (          
            <h5>Guest Component: 
                <table>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>                     
                        <Consumer>                          
                            {({data, handleClickEvent}) => (                                
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td><button onClick={() => handleClickEvent()}>Click Me</button></td>
                                </tr>                               
                            )}
                        </Consumer>                        
                    </tbody>                        
                </table>
            </h5>
        )
    }
}
