import React from "react";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import MyEdit from "./CategoryEdit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const CategoryItem = ({ event_id, onDelete, category, onEdit }) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showEditForm, setShowEditForm] = React.useState(false);
  return (
    <TableRow
      key={category.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <Link
          to={`/certificates/${event_id}/${category.id}/`}
          className="clickable-blue"
        >
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
              setShowEditForm(true);
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
        <MyEdit
          show={showEditForm}
          onHide={() => setShowEditForm(false)}
          category={category}
          onEdit={onEdit}
          setShowEditForm={setShowEditForm}
        />

        <MyModal
          show={showDeleteModal}
          onCancel={() => {
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
