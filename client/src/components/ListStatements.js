import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css';

export default class ListStatements extends Component {
  render() {
    return (
      !this.props.isLoggedIn ?
      <div className="list-card mt-5">
        <Form>
          <Form.Group controlId="formAphorism">
            <Form.Control name="aphorism" type="text" placeholder="Enter a new aphorism..." onChange={e => this.handleChange(e) } />
          </Form.Group>
          <Form.Group controlId="formAuthor">
            <Form.Control name="author" type="text" placeholder="Who said this?" onChange={e => this.handleChange(e)} />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Control name="comment" type="text" placeholder="Add a comment..." onChange={e => this.handleChange(e)} />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      :
      <h1>You are not logged in!!!</h1>
    )
  }
}
