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

    const categories = ["cables", "pedales", "multifx"];
    const otrosAccesorios = ["puas", "mics", "correas"]

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Navbar.Brand as={NavLink} to="/" href="#home" className="font-link">La cueva del guitarrista</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setExpanded(expanded ? false : "expanded")}}/>
            <Navbar.Collapse id="navbar-dark-example" >
                <Nav className="mr-auto">{categories.map( (category, i) => { 
                    return <Nav.Link as={NavLink} to={`/category/${category}`} onClick={() => setExpanded(false)}>{category.charAt(0).toUpperCase() + category.slice(1)}</Nav.Link>})}
                    <NavDropdown title="Otros accesorios" id="nav-dropdown-dark-example" >{otrosAccesorios.map( (acc) => {
                        return <NavDropdown.Item as={NavLink} to={`/category/${acc}`} onClick={() => setExpanded(false)}>{acc.charAt(0).toUpperCase() + acc.slice(1)}</NavDropdown.Item>
                    })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/otros" onClick={() => setExpanded(false)}>Otros</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Form inline>
                    <CartWidget />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}