import logo from "../../logo.svg";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Menu.scss";
import { useDispatch } from "react-redux";
import { changeType } from "../../reducers/typeSlice";

function Menu() {
  const dispatch = useDispatch();

  const typeTask = (e) => {
    e.preventDefault();
    dispatch(
      changeType(0)
    );
  };

  const typeGoal = (e) => {
    e.preventDefault();
    dispatch(
      changeType(1)
    );
  };

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
            <Nav.Link href="#task" onClick={typeTask}>Tasks</Nav.Link>
            <Nav.Link href="#goals" onClick={typeGoal}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
