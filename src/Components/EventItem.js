import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
export const EventItem = (props) => {
  return (
    <TableRow
      key={props.event.sn}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {/* {props.event.sn} */}
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <h5>{props.event.title}</h5>
      </TableCell>
      <TableCell align="left">
        <h6>{props.event.date1}</h6>
      </TableCell>
      <TableCell align="left">
        <h6>{props.event.date2}</h6>
      </TableCell>
      <TableCell align="left">
        <a
          href="#"
          onClick={() => {
            props.onDelete(props.event);
          }}
        >
          {" "}
          Edit
        </a>{" "}
        <Popup
          trigger={<a href="#"> View</a>}
          position="right center"
          closeOnDocumentClick
        >
          <div>{props.event.desc}</div>
        </Popup>
        <a
          href="#"
          onClick={() => {
            props.onDelete(props.event);
          }}
        >
          {" "}
          Delete
        </a>
      </TableCell>
    </TableRow>
  );
};
