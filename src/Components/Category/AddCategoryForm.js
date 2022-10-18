import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const InputField = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = () => {
    if (!title || !desc) {
      alert("Blank detected");
    } else {
      props.addCategory(title, desc);
    }
  };

  return (
    <>
      <h4>Add Category</h4>

      <Form>
        <Row>
          <Col>
            <div id="labels">Category name</div>
            <Form.Control
              size="lg"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Name"
            />
          </Col>
          <Col>
            <div id="labels">Category Description</div>
            <Form.Control
              size="lg"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Description"
            />
          </Col>

          <Col></Col>
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
