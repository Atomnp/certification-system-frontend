import React from "react";
// import { View, ActivityIndicator } from "react-native-web";
import Spinner from "react-bootstrap/Spinner";

import Modal from "react-bootstrap/Modal";

export const Loader = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.message ? props.message : "Loading..."}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="center">
        <Spinner animation="border" role="status"></Spinner>
      </Modal.Body>
    </Modal>
  );
};
