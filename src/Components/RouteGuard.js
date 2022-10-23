import React from "react";
import { Navigate } from "react-router-dom";

export const RouteGuard = (props) => {
  function hasJWT() {
    return localStorage.getItem("access_token") ? true : false;
  }

  return <>{hasJWT() ? props.children : <Navigate to="/login" />}</>;
  // export default RouteGuard;e
};
