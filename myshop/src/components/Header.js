import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>OnlineShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={Link}>
              About
            </Nav.Link>
            <Nav.Link to="/shop" as={Link}>
              Shop
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
