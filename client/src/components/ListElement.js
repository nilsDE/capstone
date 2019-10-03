import React, { Component, Fragment } from 'react'
import { Form, Button } from 'react-bootstrap';

import './styles.css';

export default class ListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  render() {
    let data = this.props.data;
    let id = this.props.id;
    let active = this.state.active;

    return (
      active ?
      <Fragment>
        <div key={id} className="list-card mt-5">
          <Form 
            key={id} 
            onSubmit={(e) => {
              this.props.handleSubmitUpdate(e, id)
              this.toggleActive()
          }}>
            <Form.Group controlId={id}>
              <Form.Control 
                name="statement" 
                type="text" 
                value={data.statement} 
                className="inactive-statement"
                placeholder="Enter an aphorism..." 
                onChange={e => this.props.handleChangeData(e) } 
              />
            </Form.Group>
            <Form.Group controlId={id}>
              <Form.Control 
                name="author" 
                type="text" 
                value={data.author}
                placeholder="Who said this?" 
                onChange={e => this.props.handleChangeData(e)} 
              />
            </Form.Group>
            <Form.Group controlId={id}>
              <Form.Control 
                name="comment" 
                rows="2"
                type="text" 
                value={data.comment} 
                placeholder="Add a comment..." 
                onChange={e => this.props.handleChangeData(e)} 
              />
            </Form.Group>
              <Button variant="outline-dark" type="submit">
                Update
              </Button>
              <Button className="ml-2" variant="outline-dark" onClick={(e) => this.props.deleteStatement(e, id)}>
                Delete
              </Button>
            }
          </Form>
        </div>
      </Fragment>
      :
      <div key={id} className="list-card mt-5">
        <p className="inactive-statement">{`"${data.statement}"`}</p>
        <p className="inactive-author">{`- ${data.author}`}</p>
        <p className="inactive-comment">{data.comment}</p>
        <Button variant="outline-dark" onClick={() => this.toggleActive()}>Edit</Button>
      </div>
    )
  }

  toggleActive() {
    let newVal = !this.state.active;
    this.setState({ active: newVal })
  }
}
