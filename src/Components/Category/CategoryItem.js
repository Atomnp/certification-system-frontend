import React from "react";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
export const CategoryItem = ({ onDelete, event, onEdit }) => {
  const [modalShow, setModalShow] = React.useState(false);
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
        
        <a href="#" onClick={() => setModalShow(true)}>
          Delete
        </a>
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          Delete={() => {
            onDelete(event.name);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
