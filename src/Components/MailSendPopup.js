import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

export default function MyModal({
  onSendAll,
  onSendFiltered,
  onCancel,
  ...props
}) {
  return (
    <Modal
      {...props}
      onHide={onCancel}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={onCancel}>
        <Modal.Title id="contained-modal-title-vcenter">Alert!!</Modal.Title>
      </Modal.Header>
      <h6 style={{ padding: "1rem" }}>
        Do you want to send email for all the certificate item or you wish to
        send only to those certificates where email sent is false?
      </h6>
      <Modal.Footer>
        <Button variant="danger" onClick={onSendAll}>
          Send all
        </Button>
        <Button variant="primary" onClick={onSendFiltered}>
          Send to failed
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
