import React from 'react';
import { Button, Form, FormGroup, Input, Col, Row, CardBody, CardText } from "reactstrap";

const Contact = () => {
    return (
        <div>
            <div className="contact-form">
                <h1>CONTACT</h1>
                <hr />
                <h3 className="contact-note text-left" >For any enquiries, or just to say hello
                    get in touch {' '}<br />
                    <span className="contact-me">contact me.</span>
                </h3>
                <Row className="sub-contact-info" >
                    <Col md={6}>
                        <div>
                            <CardBody>
                                <CardText className="light">Enquiries:</CardText>
                                <CardText className="dark">mdutta787@gmail.com</CardText>
                            </CardBody>
                        </div>
                    </Col>
                    <Col md={6} >
                        <div>
                            <CardBody>
                                <CardText className="light">Address:</CardText>
                                <CardText className="dark">Melbourne, VIC</CardText>
                            </CardBody>
                        </div>
                    </Col>
                </Row>
            </div>
            <Form className="form-container" mb="lg">
                <h6 className="form-title">Have a question or want to work together?</h6>
                <FormGroup>
                    <Input type="name" name="name" id="exampleName" required
                        placeholder="Name " />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" required
                        placeholder="Email " />
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Your Message" />
                </FormGroup>

                <Button id="submitBtn">SUBMIT</Button>
            </Form>
        </div>

    )
}

export default Contact;