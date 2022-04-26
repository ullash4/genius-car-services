import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
            
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={30} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            </Nav>
            <Nav>
              {user && <> <Nav.Link as={Link} to="/manage">Manage Services</Nav.Link> 
              <Nav.Link as={Link} to='/addservice'>Add Service</Nav.Link> 
              </>}
              {
                user ? <Button onClick={logout}>Log Out</Button>:<Nav.Link as={Link} to="/login">
                LogIn
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
