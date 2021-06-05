import React from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { CartWidget } from './CartWidget.js'



export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="font-link">La cueva del guitarrista</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#cables">Cables</Nav.Link>
                    <Nav.Link href="#features">Pedales</Nav.Link>
                    <Nav.Link href="#pricing">Multi-fx</Nav.Link>
                    <NavDropdown title="Otros accesorios" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Púas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mics</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Correas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Form inline>
                    
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="dark">Search</Button>
                    <CartWidget></CartWidget>
                    
                </Form>

            </Navbar.Collapse>
        </Navbar>
    );
}