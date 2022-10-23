import React, { useContext } from "react";
// import { View, ActivityIndicator } from "react-native-web";
import Spinner from "react-bootstrap/Spinner";

import Modal from "react-bootstrap/Modal";
import { APIRequestContext } from "../context";

export const Loader = (props) => {
  const { loading, loaderMessage } = useContext(APIRequestContext);
  const styles = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Modal
      show={loading}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {loaderMessage}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="center">
        {/* <div className="actions"> */}
        {/* <div className="actions"> */}
        <Spinner animation="border" role="status"></Spinner>
        {/* </div> */}
      </Modal.Body>

      {/* TODO: center align spinner */}
    </Modal>
  );
};
