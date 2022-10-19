import "./App.css";
import Event from "./Components/Event/Event";
import { Sidebar } from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyToast from "./Components/Toast";

function App() {
  const [toastData, setToastData] = useState({});

  let onToastClose = () => {
    setToastData({});
  };

  return (
    <>
      <Container className="full-height" fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col className="main-content">
            <Event setToastData={setToastData} />
          </Col>
        </Row>
      </Container>
      {console.log(toastData)}
      <MyToast
        show={toastData.message ? true : false}
        title={toastData.title}
        intent={toastData.intent}
        message={toastData.message}
        onClose={onToastClose}
      />
    </>
  );
}

export default App;
