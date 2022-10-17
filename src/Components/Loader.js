import React from "react";
// import { View, ActivityIndicator } from "react-native";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

export const Loader = (props) => {
  const styles = {
    spinnerStyle: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  };
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
      {/* TODO: center align spinner */}
      <Modal.Body>
        <Spinner animation="border" />
      </Modal.Body>
    </Modal>
  );
};
