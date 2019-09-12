import React, { Component, Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export class SiteNavbar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">MyWisdom</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/signin">LogIn</Nav.Link>
              <Nav.Link href="/signup">SignUp</Nav.Link>
            </Nav>
        </Navbar>
      </Fragment>
    )
  }
}

export default SiteNavbar
