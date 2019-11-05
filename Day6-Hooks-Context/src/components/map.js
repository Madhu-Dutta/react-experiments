import React, { Component } from 'react';

export default class map extends Component {
    state = {
        user: [
            {id: 1, name: 'Maddy', password: '1234fghd'},
            {id: 2, name: 'Boo', password: '64yfofds'},
            {id: 3, name: 'Lily', password: '94fsk3w2_ehf1'}
        ],
        isLoggedIn: false
    }
    render() {
        const newUsers = this.state.user.map(users => {
            return (
                <table border="4" key={users.id}>
                    <tbody>
                        <tr>
                            <td>{users.name}</td>
                            <td>{users.password}</td>
                        </tr>
                    </tbody>
                </table>
            )
        })
        return (
            <div>
                {newUsers}
            </div>
        )
    }
}
