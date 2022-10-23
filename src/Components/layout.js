import { Sidebar } from "./Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
export const Layout = (props) => {
  return (
    <Container className="full-height" fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col className="main-content">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
