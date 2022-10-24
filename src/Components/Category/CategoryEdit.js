import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function CategoryEdit({
  onHide,
  category,
  onEdit,
  setShowEditForm,
  ...rest
}) {
  const [name, setTitle] = useState(category.name);
  // const [desc, setDesc] = useState(category.description);

  return (
    <>
      <Modal {...rest} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {category.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <div id="labels">Category name</div>
              <Form.Control
                size="lg"
                value={name}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="category Name"
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <div id="labels">Category Description</div>
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
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              let edited_category = {
                name: name,
                //  description: desc,
                location: "Kathmandu",
              };

              onEdit(edited_category, category);
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
