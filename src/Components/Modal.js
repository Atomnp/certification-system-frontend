import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

export default function MyModal(props) {
  const { onConfirm, onCancel } = props;
  return (
    <Modal 
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton  >
        <Modal.Title id="contained-modal-title-vcenter">
          Your action can't be reversed?
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="danger" onClick={onConfirm}>
          Confirm
        </Button>
        <Button variant="primary" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
