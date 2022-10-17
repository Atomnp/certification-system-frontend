import "./App.css";
import Event from "./Components/Event";
import { Sidebar } from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="full-height" fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col className="main-content">
          <Event />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
