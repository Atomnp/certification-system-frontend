import "../../App.css";
import React from "react";
import { CertificateItem } from "./CertificateItem";
import "reactjs-popup/dist/index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export const CertificateTable = ({
  certificates,
  onDelete,
  onEdit,
  addCertificate,
}) => {
  return (
    // <TableContainer style={{ height: "100%" }} component={Paper}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell>
              <h5>Name</h5>
            </TableCell>
            <TableCell align="left">
              <h5>Email</h5>
            </TableCell>
            <TableCell align="left">
              <h5>URL</h5>
            </TableCell>
            <TableCell align="left">
              <h5>Active</h5>
            </TableCell>
            <TableCell align="left">
              <h5>Actions</h5>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {certificates.map((certificate) => {
            return (
              <CertificateItem
                key={certificate.id}
                certificate={certificate}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
