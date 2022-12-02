import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Regenerate({
  onHide,
  category,
  onRegenerate,
  setShowRegenerate,
  ...rest
}) {
  const [template, setTemplate] = useState(null);
  const [mapping, setMapping] = useState(null);
  // const [image, setImage] = useState(null);

  return (
    <>
      <Modal {...rest} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {category.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div id="labels">Template</div>
            <Form.Control
              size="lg"
              type="file"
              onChange={(e) => {
                setTemplate(e.target.files[0]);
              }}
            />
            <div id="labels">Mapping</div>
            <Form.Control
              size="lg"
              type="file"
              onChange={(e) => {
                setMapping(e.target.files[0]);
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
              onRegenerate(category.id, template, mapping);
              setShowRegenerate(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
