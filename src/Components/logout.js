import React, { useEffect } from "react";
import axios from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const response = axios.post("api/token/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axios.defaults.headers["Authorization"] = null;
    navigate("/login");
  });
  return <div>Logging out</div>;
}
