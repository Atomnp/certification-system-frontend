import React from "react";
import { MdSpaceDashboard, MdLabelImportantOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  return (
    <div>
      <div className={props.display? "sidenav": "side_nav_for_404 "} >
        <Link to="/" className="clickable-blue">
          LOCUS
        </Link>

        <Link to="/">
          <MdSpaceDashboard className="active" />
          <span className="active">Dashboard</span>
        </Link>

        <a href="#">
          <MdLabelImportantOutline /> Logs
        </a>
      </div>
    </div>
  );
};
