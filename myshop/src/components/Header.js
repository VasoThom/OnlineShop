import Button from "react-bootstrap/Button";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>OnlineShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/shop" as={Link}>
              Shop
            </Nav.Link>
            <Nav.Link to="/about" as={Link}>
              About
            </Nav.Link>
          </Nav>
        </Container>
        <Button style={{ width: "70px", height: "40px", position: "relative" }}>
          Basket
          <div
            className="rounded-circle bg-light d-flex justify-content-center align-items-center"
            style={{
              color: "black",
              width: "20px",
              height: "20px",
              position: "absolute",
              bottom: -5,
              right: 0,
            }}
          >
            3
          </div>
        </Button>
      </Navbar>
    </>
  );
}
