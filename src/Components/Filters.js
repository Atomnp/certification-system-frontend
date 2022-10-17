import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const SearchBar = () => {
  return (
    <Form style={{ padding: "1rem 0" }}>
      <Row>
        <Col xs={8}>
          <Form.Control size="lg" type="text" placeholder="Search" />
        </Col>
        <Col>
          <Form.Select size="lg">
            <option>Sort By</option>
            <option value="1">A-Z</option>
            <option value="2">Start Date</option>
            <option value="3">EndDate</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};
