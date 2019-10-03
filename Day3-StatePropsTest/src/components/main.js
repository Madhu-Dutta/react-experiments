import React from 'react';
import slide1 from '../images/road.jpg';
// import slide2 from '../images/road.jpg';
// import slide3 from '../images/road.jpg';

import img1 from '../images/ang.png';
import img2 from '../images/React.png';
import img3 from '../images/ts.png';

import { Table } from 'reactstrap';


const Main = () => {

    let isLogged = true;
    let element;

    if (isLogged) {
        var comment = "Hello there"
        element = "Login Successful"
    }
    else {
        element = "Login Failed"
    }

    let courses = [
        { id: 1, name: 'typescript', image: img1 },
        { id: 2, name: 'angular', image: img2 },
        { id: 3, name: 'react', image: img3 },
    ]

    let rowData = [];
    for (var i = 0; i < courses.length; i++) {
        var row = (
            <tr>
                <td>{courses[i].id}</td>
                <td>{courses[i].name}</td>
            </tr>
        )
        rowData.push(row)
    }
    console.log(rowData);
    console.log(row);
    console.log(courses);

    return (
        <React.Fragment>
            Main Page
            <h2>{element}</h2>
            <p>{comment}</p>
            <img src={slide1} alt="Some img" />

            <Table dark className="table-container">
                <thead>
                    <tr>
                        <td>Avatars</td>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody className="thumbnail">
                    {/* {rowData} */}
                    {
                        courses.map(function (course) {
                            return (
                                // <tr key={course.id}>
                                <tr key={Math.random()}>
                                    <td><img className="avators" src={course.image} alt="Avatars" /></td>
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </React.Fragment>
    )
}

export default Main;