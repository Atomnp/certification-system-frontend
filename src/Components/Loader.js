import React from "react";
import { View, ActivityIndicator } from "react-native";
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
          Please Wait...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={"large"} />
        </View>
      </Modal.Body>
    </Modal>
  );
};
