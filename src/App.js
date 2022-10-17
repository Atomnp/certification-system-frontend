import "./App.css";
import Event from "./Components/Event";
import Category from "./Components/Category";
import { Sidebar } from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Routes,Route } from "react-router-dom";

function App() {
  return (
    <Container className="full-height" fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>

        <Col className="main-content">
          <Router>
            <Routes>
            <Route
              path="/"
              element={
                <>
                  <Event />
                  <Category/>
                  
                </>
              }
            ></Route>
            </Routes>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
