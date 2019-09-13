import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import Axios from 'axios';

export class SiteNavbar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Link to="/" className="sidebar-title">myWisdom</Link>
            <Nav className="ml-auto">
              {!this.props.isLoggedIn ?
              <Fragment>
                  <Link to="/login" className="sidebar-link">LogIn</Link>
                  <Link to="/signup" className="sidebar-link">SignUp</Link>
                  </Fragment>
              :
              <Button onClick={() => this.logOut()} className="sidebar-btn sidebar-link">SignOut</Button>
              }
            </Nav>
        </Navbar>
      </Fragment>
    )
  }

  logOut() {
    Axios.post("/users/signout")
    .then(res => {
      if (res.data === 'ok') {
        this.props.checkLoggedIn();
      }
    }).catch(res => console.log(res))
  }
}

export default SiteNavbar;
