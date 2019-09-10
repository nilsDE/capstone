import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export class SiteNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">MyWisdom</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/signup">LogIn</Nav.Link>
              <Nav.Link href="#link">SignUp</Nav.Link>
            </Nav>
        </Navbar>
      </Container>
    )
  }
}

export default SiteNavbar
