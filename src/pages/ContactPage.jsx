import React from "react";
import NavBar from "../components/NavBar";
import ContactForm from "../components/Contact-form";
import Contact from "../components/Contact-btn";
import { Container } from "react-bootstrap";

function ContactPage() {
    return(
        <>
        <NavBar/>
        <Container fluid>
        <Contact/>
        <ContactForm/>
        </Container>
        
        </>
    )
}

export default ContactPage;