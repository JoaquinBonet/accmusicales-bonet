import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget.js';
import { NavLink } from 'react-router-dom';
import './NavBar.css';




export const NavBar = () => {

    const [expanded, setExpanded] = React.useState(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Navbar.Brand as={NavLink} to="/" href="#home" className="font-link">La cueva del guitarrista</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setExpanded(expanded ? false : "expanded")}}/>
            <Navbar.Collapse id="navbar-dark-example" >
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/category/cables" onClick={() => setExpanded(false)}>Cables</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/pedales" onClick={() => setExpanded(false)}>Pedales</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/multifx" onClick={() => setExpanded(false)}>Multi-fx</Nav.Link>
                    <NavDropdown title="Otros accesorios" id="nav-dropdown-dark-example" >
                        <NavDropdown.Item as={NavLink} to="/category/puas" onClick={() => setExpanded(false)}>Púas</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/category/mics" onClick={() => setExpanded(false)}>Mics</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/category/correas"onClick={() => setExpanded(false)} >Correas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/otros" onClick={() => setExpanded(false)}>Otros</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Form inline>
                    <CartWidget></CartWidget>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}