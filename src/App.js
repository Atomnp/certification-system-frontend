import "./App.css";
import Event from "./Components/Event/Event";
import Category from "./Components/Category/Category";
import Certificate from "./Components/Certificate/Certificate";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./Components/layout";
import { PageNotFound } from "./Components/NotFound404";
import MyToast from "./Components/Toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import { Loader } from "./Components/Loader";
import { APIRequestProvider } from "./context";
import Login from "./Components/login";
import Logout from "./Components/logout";
import { RouteGuard } from "./Components/RouteGuard";

function App() {
  function hasJWT() {
    return localStorage.getItem("access_token") ? true : false;
  }
  return (
    <APIRequestProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={hasJWT() ? <Navigate to="/events" /> : <Login />}
          />
          <Route path="/logout" element={<Logout />} />

          <Route
            path="/"
            element={
              <RouteGuard>
                <Layout />
              </RouteGuard>
            }
          >
            <Route
              path="/certificates/:event_id/:category_id"
              element={<Certificate />}
            />
            <Route path="/categories/:event_id" element={<Category />} />
            <Route path="/events" element={<Event />} />
            <Route
              index
              element={
                hasJWT() ? <Navigate to="/events" /> : <Navigate to="/login" />
              }
            />
          </Route>
          <Route
            path="*"
            element={hasJWT() ? <PageNotFound /> : <Navigate to="/login" />}
          />
        </Routes>

        <MyToast />
        <Loader />
      </Router>
    </APIRequestProvider>
  );
}

export default App;
