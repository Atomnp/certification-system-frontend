import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export const Event = () => {
  return (

    <div>
        <h4>Add Event</h4><Form>
    <Row>
      <Col>
        <Form.Control placeholder="Event Name" />
      </Col>
      <Col>
        <Form.Control placeholder="Description" />
      </Col>
      <Col>
        <Form.Control placeholder="StartDate" />
      </Col>
      <Col>
        <Form.Control placeholder="EndDate" />
      </Col>
      <Col>
      <Button variant="primary">ADD</Button>{' '}
      </Col>

    </Row>
   <br></br>
    <Row>
    
    <Col>
        <Form.Control  type="text" placeholder="Search" />
      
    </Col>
    <Col>
       
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Start Date</Dropdown.Item>
        <Dropdown.Item href="#/action-2">A-Z</Dropdown.Item>
        <Dropdown.Item href="#/action-3">End Date</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
    </Row>
    
  </Form>

    </div>


  )
}
