import "./App.css";
import Event from "./Components/Event/Event";
import Category from "./Components/Category/Category";
import Certificate from "./Components/Certificate/Certificate";
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
import { PageNotFound } from "./Components/PageNotFound";
function App() {
  const [loading, setLoading] = useState(true);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [toastData, setToastData] = useState({});
  // const [display, setDisplay] = useState(true);

  let onToastClose = () => {
    setToastData({});
  };

  return (
    <>
      <Router>
        <Container className="full-height" fluid>
          <div className="main-content">
            <Routes>
              <Route
                path="*"
                element={
                  <>
                   <Row>
                      <Col xs={2}>
                        <Sidebar display={false} />
                      </Col>
                      <Col>
                    <PageNotFound />
                    {/* <Sidebar display={setDisplay(false)}/> */}
                 
                    </Col>
                      </Row>
                  </>
                }
              />
              <Route
                path="/certificates/:event_id/:category_id"
                element={
                  <>
                    <Row>
                      <Col xs={2}>
                        <Sidebar display={true} />
                      </Col>
                      <Col>
                        <Loader message={loaderMessage} show={loading} />
                        <Certificate
                          setLoaderMessage={setLoaderMessage}
                          setLoading={setLoading}
                          setToastData={setToastData}
                        />
                      </Col>
                    </Row>
                  </>
                }
              />
              <Route
                path="/categories/:event_id"
                element={
                  <>
                    <Row>
                      <Col xs={2}>
                        <Sidebar display={true} />
                      </Col>
                      <Col>
                        <Loader message={loaderMessage} show={loading} />
                        <Category
                          setLoading={setLoading}
                          setToastData={setToastData}
                        />
                      </Col>
                    </Row>
                  </>
                }
              />
              <Route
                path="/events"
                element={
                  <>
                    <Row>
                      <Col xs={2}>
                        <Sidebar display={true} />
                      </Col>
                      <Col>
                        <Event
                          setLoaderMessage={setLoaderMessage}
                          setLoading={setLoading}
                          setToastData={setToastData}
                        />
                      </Col>
                    </Row>
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    {" "}
                    <Loader message={loaderMessage} show={loading} />
                    <Navigate to="/events" />
                  </>
                }
              />
            </Routes>
          </div>
        </Container>

        <MyToast
          show={toastData.message ? true : false}
          title={toastData.title}
          intent={toastData.intent}
          message={toastData.message}
          onClose={onToastClose}
        />
      </Router>
    </>
  );
}

export default App;
