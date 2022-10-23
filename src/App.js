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
  const isLoggedIn = () => {
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
      console.log(access_token, "access_token");
      return true;
    }
  };
  return (
    <APIRequestProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
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
                isLoggedIn() ? (
                  <Navigate to="/events" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Route>
          <Route
            path="*"
            element={isLoggedIn() ? <PageNotFound /> : <Navigate to="/login" />}
          />
        </Routes>

        <MyToast />
        <Loader />
      </Router>
    </APIRequestProvider>
  );
}

export default App;
