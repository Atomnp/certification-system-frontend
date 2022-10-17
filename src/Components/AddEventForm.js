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
      props.addEvent(title, desc, date1, date2);
    }
  };

  return (
    <>
      <h4>Add New Event</h4>
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
      </Form>
    </>
  );
};
