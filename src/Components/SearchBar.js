import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const SearchBar = () => {
  return (
    <div className="Form_area">
      <Form>
        <Row>
          <Col>
            <Form.Control size="lg" type="text" placeholder="Search" />
          </Col>
          <Col></Col>
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
      <br></br>
    </div>
  );
};
