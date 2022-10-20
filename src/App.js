import "./App.css";
import Event from "./Components/Event/Event";
import Category from "./Components/Category/Category";
import { Sidebar } from "./Components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyToast from "./Components/Toast";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import { Loader } from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [toastData, setToastData] = useState({});

  let onToastClose = () => {
    setToastData({});
  };
  return (
    <Router>
      <Container className="full-height" fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col className="main-content">
            <Routes>
              <Route
                path="/categories/:event_id"
                element={
                  <>
                    <Category
                      setLoading={setLoading}
                      setToastData={setToastData}
                    />
                  </>
                }
              />
              <Route
                path="/events"
                element={
                  <>
                    <Event
                      setLoaderMessage={setLoaderMessage}
                      setLoading={setLoading}
                      setToastData={setToastData}
                    />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Navigate to="/events" />
                  </>
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>
      <MyToast
        show={toastData.message ? true : false}
        title={toastData.title}
        intent={toastData.intent}
        message={toastData.message}
        onClose={onToastClose}
      />
      <Loader message={loaderMessage} show={loading} />
    </Router>
  );
}

export default App;
