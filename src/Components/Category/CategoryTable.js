import "../../App.css";
import React from "react";
import { CategoryItem } from "./CategoryItem";
import "reactjs-popup/dist/index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const EventTable = ({ events, onDelete, onEdit }) => {
  return (
    // <TableContainer style={{ height: "100%" }} component={Paper}>
    <TableContainer
      style={{ height: "33rem", overflowY: "scroll" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell>
              <h5>Category Name</h5>
            </TableCell>
            <TableCell align="left">
              <h5>Created at</h5>
            </TableCell>
            <TableCell align="left">
              <h5>Certificates count</h5>
            </TableCell>
            <TableCell align="left">
              <h5>Action</h5>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => {
            return (
              <CategoryItem key={event.name} event={event} onDelete={onDelete} />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
