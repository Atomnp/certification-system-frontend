import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const InputField = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const submit = () => {
    if (!title || !desc || !date1 || !date2) {
      alert("Blank detected");
    } else {
      console.log(title);
      props.addEvent(title, desc, date1, date2);
    }
  };

  return (
    <div className="Form_area">
      <h4>Add New Event</h4>
      <br></br>
      <Form>
        <Row>
          <Col>
            <div id="labels">Event name</div>
            <Form.Control
              size="lg"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Event Name"
            />
          </Col>
          <Col>
            <div id="labels">Event Description</div>
            <Form.Control
              size="lg"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Description"
            />
          </Col>
          <Col>
            <div id="labels">StartDate</div>
            <Form.Control
              size="lg"
              type="date"
              value={date1}
              onChange={(e) => {
                setDate1(e.target.value);
              }}
              placeholder="StartDate"
            />
          </Col>
          <Col>
            <div id="labels">EndDate</div>
            <Form.Control
              type="date"
              size="lg"
              value={date2}
              onChange={(e) => {
                setDate2(e.target.value);
              }}
              placeholder="EndDate"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="btn">
              <Button variant="primary" type="button" onClick={submit}>
                ADD
              </Button>{" "}
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Control size="lg" type="text" placeholder="Search" />
          </Col>
          <Col></Col>

          <Col>
            <Form.Select size="lg">
              <option>Sort By</option>
              <option value="1">A-Z</option>
              <option value="2">Start Date</option>
              <option value="3">EndDate</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <br></br>
    </div>
  );
};
