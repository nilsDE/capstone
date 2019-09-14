import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';

export default class ListStatements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statement: '',
      author: '',
      comment: '',
      data: []
    }
  }

  getAllStatements() {
    axios.get('/statements').then(res => this.setState({ data: res.data }));
  }

  componentDidMount() {
    this.getAllStatements();
  }

  render() {
    const { statement, author, comment } = this.state;
    return (
      this.props.isLoggedIn ?
      <Fragment>
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

        {this.state.data.map((s, id) => 
        <div key={id} className="list-card mt-5">
          <Form key={id} onSubmit={(e) => this.handleSubmitUpdate(e, id)}>
            <Form.Group controlId={id}>
              <Form.Control name="statement" type="text" value={s.statement} placeholder="Enter an aphorism..." onChange={e => this.handleChangeData(e) } />
            </Form.Group>
            <Form.Group controlId={id}>
              <Form.Control name="author" type="text" value={s.author} placeholder="Who said this?" onChange={e => this.handleChangeData(e)} />
            </Form.Group>
            <Form.Group controlId={id}>
              <Form.Control name="comment" type="text" value={s.comment} placeholder="Add a comment..." onChange={e => this.handleChangeData(e)} />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        )}
      </Fragment>
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
        this.getAllStatements();
        this.props.checkLoggedIn();
      }
    }).catch(res => console.log(res))
  }

  handleSubmitUpdate(e, key) {
    e.preventDefault();
    let statement = this.state.data[key];
    axios.post('/statement/update', {
      statement: statement.statement,
      author: statement.author,
      comment: statement.comment,
      id: statement.id
    }).then(res => {
      if (res.data === 'ok') {
        console.log('okay')
        this.props.checkLoggedIn();
      }
    }).catch(res => console.log(res))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChangeData(e) {
    const currId = e.target.id;
    const currName = e.target.name;
    const currVal = e.target.value;
    this.setState(state => {
      const newData = state.data;
      newData[currId][currName] = currVal;
      return {
        newData
      };
    });
  }
};