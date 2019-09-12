import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <Fragment>
        <Form className="mt-5" action="/users" method="post">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={e => this.handleChange(e) } />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={e => this.handleChange(e)} />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </Fragment>
    )
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
}
