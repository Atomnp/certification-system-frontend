import React from "react";
import { MdSpaceDashboard, MdLabelImportantOutline } from "react-icons/md";

export const Sidebar = () => {
  return (
    <div>
      <div className="sidenav">
        <a href="#">
          <b> LOCUS</b>
        </a>
        <br></br>

        <a href="#">
          <MdSpaceDashboard /> Dashboard
        </a>
        <a href="#">
          <MdLabelImportantOutline /> Logos
        </a>
      </div>
    </div>
  );
};
