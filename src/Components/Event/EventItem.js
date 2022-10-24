import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import MailSendPopup from "../MailSendPopup";
import MyEdit from "./Edit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export const EventItem = ({ onDelete, event, onEdit, onMailSend }) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [showMailSend, setShowMailSend] = React.useState(false);

  return (
    <TableRow
      key={event.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <Link to={`/categories/${event.id}/`} className="clickable-blue">
          <p>{event.name}</p>
        </Link>
      </TableCell>
      <TableCell align="left">
        <h6>{event.start_date}</h6>
      </TableCell>
      <TableCell align="left">
        <h6>{event.end_date}</h6>
      </TableCell>
      <TableCell align="left">
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
          event={event}
          onEdit={onEdit}
          setShowEditForm={setShowEditForm}
        />
        <MyModal
          show={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            onDelete(event.id);
            setShowDeleteModal(false);
          }}
        />
        <MailSendPopup
          show={showMailSend}
          onCancel={() => {
            setShowMailSend(false);
          }}
          onSendAll={() => {
            onMailSend(event.id, true);
            setShowMailSend(false);
          }}
          onSendFiltered={() => {
            onMailSend(event.id, false);
            setShowMailSend(false);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
