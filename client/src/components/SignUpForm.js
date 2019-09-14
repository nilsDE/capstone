import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/list' />
    }

    return (
      <Fragment>
        <Form className="mt-5" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>SignUp</h2>
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

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/users', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      if (res.data === 'ok') {
        this.props.checkLoggedIn();
        this.setState({redirect: true })
      }
    }).catch(res => console.log(res))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
}
