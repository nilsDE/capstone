import React, { Component, Fragment } from 'react';
import bg from './../assets/unsplash1.jpg';
import { Button, Nav } from 'react-bootstrap';
import './styles.css';

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-container">
          <h2 className="bg-headline-1">Welcome to</h2>
          <h2 className="bg-headline-2">myWisdom</h2>
          <img src={ bg } className="bg-pic" alt=""/>
        </div>
        <div className="btn-container">
          <Nav.Link href="/signup">
            <Button
            variant="outline-dark"
            className="signup-btn mt-4"
            size="lg"
            >Sign Up!</Button>
          </Nav.Link>
        </div>
      </Fragment>
    )
  }
}

export default LandingPage
