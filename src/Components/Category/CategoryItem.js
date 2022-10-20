import React from "react";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const CategoryItem = ({ onDelete, category, onEdit }) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  return (
    <TableRow
      key={category.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <Link to={`/certificates/${category.id}/`} className="clickable-blue">
          {category.name}
        </Link>
      </TableCell>

      <TableCell component="th" scope="row">
        <h5>{category.certificate_count}</h5>
      </TableCell>

      <TableCell>
        <div className="center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onEdit(category, category);
            }}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </Button>
        </div>

        <MyModal
          show={showDeleteModal}
          onCancel={() => {
            console.log("cancel");
            setShowDeleteModal(false);
          }}
          onConfirm={() => {
            onDelete(category.id);
            setShowDeleteModal(false);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
