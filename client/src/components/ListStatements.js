import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';

export default class ListStatements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statement: '',
      author: '',
      comment: ''
    }
  }

  componentDidMount() {
    axios.get('/statements').then(res => console.log('axios', res))
  }

  render() {
    const { statement, author, comment } = this.state;
    return (
      this.props.isLoggedIn ?
      <div className="list-card mt-5">
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group controlId="formAphorism">
            <Form.Control name="statement" type="text" value={statement} placeholder="Enter a new aphorism..." onChange={e => this.handleChange(e) } />
          </Form.Group>
          <Form.Group controlId="formAuthor">
            <Form.Control name="author" type="text" value={author} placeholder="Who said this?" onChange={e => this.handleChange(e)} />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Control name="comment" type="text" value={comment} placeholder="Add a comment..." onChange={e => this.handleChange(e)} />
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

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/statement/create', {
      statement: this.state.statement,
      author: this.state.author,
      comment: this.state.comment
    }).then(res => {
      if (res.data === 'ok') {
        this.setState({
          statement: '',
          author: '',
          comment: ''
        })
        this.props.checkLoggedIn();
      }
    }).catch(res => console.log(res))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
}
