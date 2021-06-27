import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget.js';
import { NavLink } from 'react-router-dom';




export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={NavLink} to="/" href="#home" className="font-link">La cueva del guitarrista</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/category/cables">Cables</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/pedales">Pedales</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/multifx">Multi-fx</Nav.Link>
                    <NavDropdown title="Otros accesorios" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/category/puas" variant="dark" >Púas</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/category/mics" >Mics</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/category/correas" >Correas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/otros">Otros</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Form inline>
                    <CartWidget></CartWidget>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}