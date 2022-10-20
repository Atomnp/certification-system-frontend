import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import MyEdit from "./Edit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export const EventItem = ({ onDelete, event, onEdit }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);

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
          {event.name}
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
              setShow(true);
            }}
          >
            Edit
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onEdit(event.desc);
            }}
          >
            view
          </Button>

          {/* <Popup
          trigger={<a href="#"> View</a>}
          position="right center"
          closeOnDocumentClick
        >
          <div>{event.desc}</div>
        </Popup> */}
          <Button variant="danger" size="sm" onClick={() => setModalShow(true)}>
            Delete
          </Button>
        </div>
        <MyEdit
          show={show}
          onHide={() => setShow(false)}
          event={event}
          onEdit={onEdit}
          setShow={setShow}
        />
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onConfirm={() => {
            onDelete(event.id);
            setModalShow(false);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
