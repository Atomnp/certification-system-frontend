import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function RowEdit(props) {
  const { onConfirm, onHide } = props;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <div id="labels">Event name</div>
              <Form.Control
                size="lg"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Event Name"
             
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <div id="labels">Event Description</div>
              <Form.Control
                as="textarea"
                rows={3}
                size="lg"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group className="mb-3">
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
            </Form.Group>
            <Form.Group className="mb-3">
              <div id="labels">EndDate</div>
              <Form.Control
                size="lg"
                type="date"
                value={date2}
                onChange={(e) => {
                  setDate2(e.target.value);
                }}
                placeholder="EndDate"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
