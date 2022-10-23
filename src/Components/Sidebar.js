import React from "react";
import { MdSpaceDashboard, MdLabelImportantOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faHistory,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  return (
    <div>
      <div className="sidenav">
        <Link
          style={{ paddingBottom: "3rem" }}
          to="/"
          className="clickable-blue"
        >
          LOCUS
        </Link>

        <Link style={{ marginBottom: "0.5rem" }} to="/">
          <FontAwesomeIcon style={{ marginRight: "1rem" }} icon={faDashboard} />
          <span className="active">Dashboard</span>
        </Link>

        <Link style={{ marginBottom: "0.5rem" }} to="/logs">
          <FontAwesomeIcon style={{ marginRight: "1rem" }} icon={faHistory} />
          <span>Logs</span>
        </Link>
        <Link style={{ marginBottom: "0.5rem" }} to="/logout">
          <FontAwesomeIcon style={{ marginRight: "1rem" }} icon={faSignOut} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};
