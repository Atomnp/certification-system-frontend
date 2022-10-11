import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Table from "react-bootstrap/Table";

 


export const Event = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const submit = () => {
    if (!title || !desc || !date1 ||!date2) {
      alert("Blank detected");
    }
    props.addEvent(title, desc,date1,date2);
  };
  
  return (
    <div>


      <h4>Add Event</h4>
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Event Name"
            />
          </Col>
          <Col>
            <Form.Control
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Description"
            />
          </Col>
          <Col>
            <Form.Control type='date'
            value={date1}
            onChange={(e) => {
              setDate1(e.target.value);
            }} placeholder="StartDate" />
          </Col>
          <Col>
            <Form.Control type='date'
             value={date2}
             onChange={(e) => {
               setDate2(e.target.value);
             }}
             placeholder="EndDate" />
          </Col>
          <Col>
            <Button variant="primary" type="button" onClick={submit}>
              ADD
            </Button>{" "}
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Search" />
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
      <br></br>

      <Table  striped bordered hover  >
        <thead >
          <tr>
            <th>S.N</th>
            <th>Event Name</th>
            <th>Description</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Action</th>
          </tr>
        </thead>
      </Table>

     
        {props.events.map((event) => {
          return (
            
            <div>
              

              <Table  striped bordered hover>
                <tbody >
                  <tr>
                    <td>{event.sn}</td>
                    <td>{event.title}</td>
                    <td>{event.desc}</td>
                    <td>{event.date1}</td>
                    <td>{event.date2}</td>
                   <td>
                   <Button size='sm 'onClick={()=>{props.onEdit(event)}} type="danger">Edit</Button>
                   {' '}<Button size='sm 'onClick={()=>{props.onView(event)}} type="danger">View</Button>
                   {' '}  <Button size='sm 'onClick={()=>{props.onDelete(event)}} type="danger">Delete</Button></td> 
                  </tr>
                </tbody>

              </Table>
              
            </div>
          );
        })}
     
    </div>
  );
};
