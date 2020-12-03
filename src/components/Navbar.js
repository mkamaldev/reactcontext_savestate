import React, { useContext, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import themeContext from "../../src/context/themeContext";
const Navbar_Component = () => {
  const { navbg, bgvariant } = useContext(themeContext);
  useEffect(() => {
    localStorage.setItem("navbg", navbg);
    localStorage.setItem("bgvariant", bgvariant);
  }, [navbg, bgvariant]);

  return (
    <Navbar bg={navbg} variant={bgvariant} expand="lg">
      <Navbar.Brand href="#home">Kamdev</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#page1">Page 1</Nav.Link>
          <Nav.Link href="#page2">Page 2</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_Component;
