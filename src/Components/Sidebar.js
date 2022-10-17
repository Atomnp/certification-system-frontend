import React from "react";
import { MdSpaceDashboard, MdLabelImportantOutline } from "react-icons/md";

export const Sidebar = () => {
  return (
    <div>
      <div className="sidenav">
        <a href="#">
          <b> LOCUS</b>
        </a>
        <a className="active" href="#">
          <MdSpaceDashboard className="active" />{" "}
          <span className="active">Dashboard</span>
        </a>
        <a href="#">
          <MdLabelImportantOutline /> Logs
        </a>
      </div>
    </div>
  );
};
