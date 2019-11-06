import React from 'react';

export default function Profile(props) {
    return (
        <React.Fragment>
            <h1>From the Profile page: {props.name}</h1>
        </React.Fragment>
    )
}
