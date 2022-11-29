import React, { useContext } from "react";
import { APIRequestContext } from "../context";
import axios from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const { request_handler } = useContext(APIRequestContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    request_handler(async () => {
      let res = await axios.post(
        "api/token/",
        JSON.stringify({
          email: e.target[0].value,
          password: e.target[1].value,
        })
      );
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      axios.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
        window.location.href = "/events";
    });
  };

  return (
    <div className="Auth-form-container">
      <form onSubmit={onSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
