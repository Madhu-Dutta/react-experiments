// import React, { Component } from 'react';
// import Guest from './Guest';

// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>User Component: </h3>                    
//                 <Guest id={this.props.userId} nm={this.props.name} />
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import Guest from './Guest';

export default class User extends Component {
    render() {
        return (
            <div>
                <Guest />
            </div>
        )
    }
}

