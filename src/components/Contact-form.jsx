import React from "react";
import { InputGroup, Form, Container, Button } from "react-bootstrap";

function ContactForm() {
    return(
        <>
        <InputGroup>
            <InputGroup.Text className="m-2">Name</InputGroup.Text>
            <Form.Control className="m-2"/>
        </InputGroup>
        <InputGroup>
            <InputGroup.Text className="m-2">Email</InputGroup.Text>
            <Form.Control className="m-2"/>
        </InputGroup>
        <InputGroup>
            <InputGroup.Text className="m-2">Message</InputGroup.Text>
            <Form.Control as="textarea" className="m-2"></Form.Control>
        </InputGroup>
        <Container className="text-center">
        <Button className="m-2 contact-btn">Submit</Button>
        </Container>
        </>
    )
}

export default ContactForm;