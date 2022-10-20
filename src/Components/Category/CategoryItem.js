import React from "react";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import { Button } from "react-bootstrap";
export const CategoryItem = ({ onDelete, category, onEdit }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <TableRow
      key={category.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <h5 className="clickable-blue">{category.name}</h5>
      </TableCell>

      <TableCell component="th" scope="row">
        <p>11</p>
      </TableCell>

      <TableCell>
        <div className="center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onEdit(category,category);
            }}
          >
            Edit
          </Button>

          <Button variant="danger" size="sm" onClick={() => setModalShow(true)}>
            Delete
          </Button>
        </div>

        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          Delete={() => {
            onDelete(category.name);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
