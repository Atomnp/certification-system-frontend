import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function RowEdit(props) {
  const { onHide, certificate, onEdit, setShowEditForm } = props;

  const [name, setName] = useState(certificate.name);
  const [email, setEmail] = useState(certificate.email);
  const [image, setImage] = useState(null);

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {certificate.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <div id="labels">Name</div>
              <Form.Control
                size="lg"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <div id="labels">Email</div>
              <Form.Control
                rows={3}
                size="lg"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <div id="labels">Image</div>
            <Form.Control
              size="lg"
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
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
                email: email,
                image: image,
                active: certificate.active,
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
