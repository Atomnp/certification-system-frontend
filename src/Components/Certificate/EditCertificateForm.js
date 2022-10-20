import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function RowEdit(props) {
  const { onHide, certificate, onEdit, setShowEditForm } = props;

  const [name, setTitle] = useState(certificate.name);
  const [desc, setDesc] = useState(certificate.description);
  const [date1, setDate1] = useState(certificate.start_date);
  const [date2, setDate2] = useState(certificate.end_date);

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {certificate.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <div id="labels">Certificate name</div>
              <Form.Control
                size="lg"
                value={name}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Certificate Name"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <div id="labels">Certificate Description</div>
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
          <Button
            variant="primary"
            onClick={() => {
              let edited_certificate = {
                name: name,
                description: desc,
                start_date: date1,
                end_date: date2,
                location: "Kathmandu",
              };
              onEdit(edited_certificate, certificate);
              setShowEditForm(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
