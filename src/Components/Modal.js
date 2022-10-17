import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

export default function MyModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Do you really want to delete?
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button onClick={props.Delete}>Yes</Button>
        <Button onClick={props.onHide}>NO</Button>
      </Modal.Footer>
    </Modal>
  );
}
