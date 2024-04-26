import logo from "../../logo.svg";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Menu.scss";

function Menu() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="navbar-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Brand href="#home">WVEGA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#task">Tasks</Nav.Link>
            <Nav.Link href="#goals">Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
