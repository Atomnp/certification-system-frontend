import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
export const EventItem = ({ onDelete, event, onEdit }) => {
  return (
    <TableRow
      key={event.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <h5 className="clickable-blue">{event.name}</h5>
      </TableCell>
      <TableCell align="left">
        <h6>{event.start_date}</h6>
      </TableCell>
      <TableCell align="left">
        <h6>{event.end_date}</h6>
      </TableCell>
      <TableCell align="left">
        <a
          href="#"
          onClick={() => {
            onEdit(event.name);
          }}
        >
          Edit
        </a>
        <Popup
          trigger={<a href="#"> View</a>}
          position="right center"
          closeOnDocumentClick
        >
          <div>{event.desc}</div>
        </Popup>
        <a
          href="#"
          onClick={() => {
            onDelete(event.name);
          }}
        >
          Delete
        </a>
      </TableCell>
    </TableRow>
  );
};
