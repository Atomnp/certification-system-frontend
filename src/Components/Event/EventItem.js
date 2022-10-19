import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import { BrowserRouter as createSearchParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export const EventItem = ({ onDelete, event, onEdit }, setModalData) => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const params = { event_name: "sf2022" };
  console.log(event.name);

  const navigateToCategories = () => {
    navigate({
      pathname: "/categories",
      search: `?${createSearchParams(params)}`,
    });
  };
  // c51df0f
  return (
    <TableRow
      key={event.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <h5 className="clickable-blue" onClick={navigateToCategories}>
          {event.name}
        </h5>
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
        <a href="#" onClick={() => setModalShow(true)}>
          Delete
        </a>

        <MyModal
          show={modalShow}

          onCancel={() => setModalShow(false)}
          onConfirm={() => {
            onDelete(event.name);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
