import React from "react";

import { Row, Col, Card, CardBody, CardText } from 'reactstrap';

const Blog = () => {
    return (
        <div className="container-wrapper">
            <h1>Blog Page</h1>

            <div id="header" className="card" >

                <Card className="contents" style={{ backgroundColor: "#EFEFEF" }}>
                    <CardBody className="text-center thumbnail" style={{ backgroundColor: "#EFEFEF" }}>
                        <img src="" alt="About" />

                        <h2>What do we deliver?</h2>
                        <div className="texts">
                            <CardText className="text-left">
                                International experience has already demonstrated broad benefits of environmental initiatives within the nephrology sector.
                    </CardText>

                            <CardText className="text-left">
                                In the UK, the Green Nephrology (GN) Network was established (2009) by the National Health Service Sustainable Healthcare Programme. It has led to both attitudinal and practice change.
                    </CardText>
                        </div>
                    </CardBody>
                    <Row className="text-center">
                        <Col lg={6}>
                            <div className="texts">
                                <ul>
                                    <h6>The GN Network</h6>
                                    <li>470 milion litres of water</li>
                                    <li>470 milion litres of water</li>
                                    <li>470 milion litres of water</li>
                                    <li>470 milion litres of water</li>

                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="texts">
                                <ul>
                                    <h6>The GN Network</h6>
                                    <li>470 milion litres of water</li>
                                    <li>470 milion litres of water</li>
                                    <li>470 milion litres of water</li>
                                    <li>470 milion litres of water</li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Card>

                <Card className="contents" style={{ backgroundColor: "#F8F8F8" }}>
                    <CardBody className="text-center thumbnail" style={{ backgroundColor: "#F8F8F8" }}>
                        <img src="" alt="History" />

                        <h2>Our History.</h2>
                        <div className="texts">

                            <CardText className="text-left">
                                The site originally arose from the 'green experience' of the renal service
                            </CardText>

                            <CardText className="text-left">
                                GNAT is indebted to Professor John Agar and Barwon Health Renal Services, Geelong, Australia.
                            </CardText>

                            <CardText className="text-left">
                                In addition and in turn, the Barwon Health team express their gratitude to Fresenius Mediacal Care (Australia) for providing initial sponsership seed funding that permitted the first iteriation of this website to be built in 2004.
                            </CardText>
                        </div>
                    </CardBody>
                </Card>

                <Card style={{ backgroundColor: "#EFEFEF" }}>
                    <CardBody className="text-center thumbnail" style={{ backgroundColor: "#EFEFEF" }}>

                        <h2>About the GNAT Team</h2>

                        <Row>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Prof. John Agar</h5>
                                <span className="name">Nephrologist</span><br />
                                <span className="name">Barwon Health</span>
                            </Col>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Prof. John Knight</h5>
                                <span className="name">Nephrologist</span><br />
                                <span className="name">George Institute</span>
                            </Col>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Prof. Mathew Sypek</h5>
                                <span className="name">Nephrologist</span><br />
                                <span className="name">Royal Melbourne</span>
                            </Col>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Prof. Leila Arnold</h5>
                                <span className="name">Nephrologist</span><br />
                                <span className="name">Wellington Hospital</span>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Ms. Anthea White </h5>
                                <span className="name">Satelite Dialysis Manager</span><br />
                                <span className="name">Coburg Dialysis</span>
                            </Col>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Dr. Shlipa Jesudason</h5>
                                <span className="name">Medical Director</span><br />
                                <span className="name">Kidney Health AUS</span>
                            </Col>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Dr. Marie Ludlow</h5>
                                <span className="name">Nephrologist</span><br />
                                <span className="name">Kidney Health AUS</span>
                            </Col>
                            <Col lg={3} className="thumbnail" style={{ padding: "3%" }}>
                                <img src="" alt="About" />
                                <h5>Mr. Greg Collette</h5>
                                <span className="name">Haemodialysis Patient</span><br />
                                <span className="name">KHA Consumer Council</span>
                            </Col>
                        </Row>


                    </CardBody>
                </Card>


            </div>
        </div>

    )
}
export default Blog;