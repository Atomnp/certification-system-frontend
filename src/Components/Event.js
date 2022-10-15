import "../App.css";
import React from "react";
import { MdSpaceDashboard, MdLabelImportantOutline } from "react-icons/md";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Event = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const submit = () => {
    if (!title || !desc || !date1 || !date2) {
      alert("Blank detected");
    } else {
      props.addEvent(title, desc, date1, date2);
    }
  };

  return (
    <div>
      <div className="sidenav">
        <a href="#">
          <b> LOCUS</b>
        </a>
        <br></br>

        <a href="#">
          <MdSpaceDashboard /> Dashboard
        </a>
        <a href="#">
          <MdLabelImportantOutline /> Logos
        </a>
      </div>
      <div className="Form_area">
        <h4>Add New Event</h4>
        <br></br>
        <Form>
          <Row>
            <Col>
              <div id="labels">Event name</div>
              <Form.Control
                size="lg"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Event Name"
              />
            </Col>
            <Col>
              <div id="labels">Event Description</div>
              <Form.Control
                size="lg"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                placeholder="Description"
              />
            </Col>
            <Col>
              <div id="labels">StartDate</div>
              <Form.Control
                size="lg"
                type="date"
                value={date1}
                onChange={(e) => {
                  setDate1(e.target.value);
                }}
                placeholder="StartDate"
              />
            </Col>
            <Col>
              <div id="labels">EndDate</div>
              <Form.Control
                type="date"
                size="lg"
                value={date2}
                onChange={(e) => {
                  setDate2(e.target.value);
                }}
                placeholder="EndDate"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="btn">
                <Button variant="primary" type="button" onClick={submit}>
                  ADD
                </Button>{" "}
              </div>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Search" />
            </Col>
            <Col></Col>

            <Col>
              <Form.Select size="lg">
                <option>Sort By</option>
                <option value="1">A-Z</option>
                <option value="2">Start Date</option>
                <option value="3">EndDate</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
        <br></br>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                {/* <TableCell>S.N</TableCell> */}

                <TableCell align="left">
                  <h5>Event Name</h5>
                </TableCell>
                <TableCell align="left">
                  <h5>StartDate</h5>
                </TableCell>
                <TableCell align="left">
                  <h5>EndDate</h5>
                </TableCell>
                <TableCell align="left">
                  <h5>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.events.map((event) => (
                <TableRow
                  key={event.sn}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {/* {event.sn} */}
                    <input type="checkbox" />
                  </TableCell>

                  <TableCell align="left">
                    <h5>{event.title}</h5>
                  </TableCell>
                  <TableCell align="left">
                    <h6>{event.date1}</h6>
                  </TableCell>
                  <TableCell align="left">
                    <h6>{event.date2}</h6>
                  </TableCell>

                  <TableCell align="left">
                    <a
                      href="#"
                      onClick={() => {
                        props.onDelete(event);
                      }}
                    >
                      {" "}
                      Edit
                    </a>{" "}
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
                        props.onDelete(event);
                      }}
                    >
                      {" "}
                      Delete
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
