import React from 'react';
import { Component} from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Welcome to BankAdda!</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="ifsc">Ifsc</Nav.Link>
                <Nav.Link href="city">City</Nav.Link>
                <Nav.Link href="fd">Fixed Deposit</Nav.Link>
            </Nav>
            <div>
            </div>
        </Navbar>
    );
}

export default Navigation;