import React from "react";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import MyEdit from "./CategoryEdit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MailSendPopup from "../MailSendPopup";
import Regenerate from "./RegenerateCategoryCertificate";
export const CategoryItem = ({
  event_id,
  onDelete,
  category,
  onEdit,
  onMailSend,
  onRegenerate,
}) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [showMailSend, setShowMailSend] = React.useState(false);
  const [showRegenerate, setShowRegenerate] = React.useState(false);
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
              setShowRegenerate(true);
            }}
          >
            Regenerate
          </Button>
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
            variant="primary"
            size="sm"
            onClick={() => {
              setShowMailSend(true);
            }}
          >
            Mail
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
        <MailSendPopup
          show={showMailSend}
          onCancel={() => {
            setShowMailSend(false);
          }}
          onSendAll={() => {
            onMailSend(category.id, true);
            setShowMailSend(false);
          }}
          onSendFiltered={() => {
            onMailSend(category.id, false);
            setShowMailSend(false);
          }}
        />
        <Regenerate
          show={showRegenerate}
          onHide={() => setShowRegenerate(false)}
          category={category}
          onRegenerate={onRegenerate}
          setShowRegenerate={setShowRegenerate}
        />
      </TableCell>
    </TableRow>
  );
};
