import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import MyEdit from "./Edit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const EventItem = ({ onDelete, event, onEdit ,addEvent}, setModalData) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  console.log('form item',event.name)

  return (
    <TableRow
      key={event.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <Link
          style={{ textDecoration: "none", fontWeight: "bold" }}
          to={`/categories`}
          className="clickable-blue"
        >
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
        <div className="actions">
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShow(true)}
           
          >
            Edit
          </Button>

          <MyEdit
            show={show}
            onHide={() => setShow(false)}
            event={event}
            addEvent={addEvent}
            onConfirm={() => {
              onEdit(event.name);
            }}
          />

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

        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onConfirm={() => {
            onDelete(event.name);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
