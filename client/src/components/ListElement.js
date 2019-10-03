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
      <Fragment>
        <div key={id} className="list-card mt-5">
          <Form 
            key={id} 
            onSubmit={(e) => {
              this.props.handleSubmitUpdate(e, id)
              this.toggleActive()
          }}>
            <Form.Group controlId={id} className={!active ? "inactive-group" : null}>
              <Form.Control 
                name="statement" 
                type="text" 
                value={active ? data.statement : `"${data.statement}"` } 
                className={!active ? "inactive-statement" : null}
                placeholder="Enter an aphorism..." 
                onChange={e => this.props.handleChangeData(e) } 
                disabled={!active ? true : false}
              />
            </Form.Group>
            <Form.Group controlId={id}>
              <Form.Control 
                name="author" 
                type="text" 
                value={active ? data.author : `- ${data.author}`}
                className={!active ? "inactive-author" : null} 
                placeholder="Who said this?" 
                onChange={e => this.props.handleChangeData(e)} 
                disabled={!active ? true : false}
              />
            </Form.Group>
            <Form.Group controlId={id}>
              <Form.Control 
                name="comment" 
                rows="2"
                type="text" 
                value={data.comment} 
                className={!active ? "inactive-comment" : null} 
                placeholder="Add a comment..." 
                onChange={e => this.props.handleChangeData(e)} 
                disabled={!active ? true : false}
              />
            </Form.Group>
           
            {!active ?
              <Button variant="outline-dark" onClick={() => this.toggleActive()}>Edit</Button>
            :
              <Fragment>
                <Button variant="outline-dark" type="submit">
                  Update
                </Button>
                <Button className="ml-2" variant="outline-dark" onClick={(e) => this.props.deleteStatement(e, id)}>
                  Delete
                </Button>
              </Fragment>  
            }
            
          </Form>
        </div>
      </Fragment>
    )
  }

  toggleActive() {
    let newVal = !this.state.active;
    this.setState({ active: newVal })
  }
}
