import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MyModal from "../Modal";
import MyEdit from "./EditCertificateForm";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MailSendPopup from "../MailSendPopup";
import {
  faCopy,
  faCheckCircle,
  faCross,
} from "@fortawesome/free-solid-svg-icons";

export const CertificateItem = ({
  onDelete,
  certificate,
  onEdit,
  onMailSend,
}) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showEditForm, setShowEditForm] = React.useState(false);
  // const [showMailSend, setShowMailSend] = React.useState(false);

  return (
    <TableRow
      key={certificate.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input type="checkbox" />
      </TableCell>
      <TableCell align="left">
        <h6 className="clickable-blue">{certificate.name}</h6>
      </TableCell>
      <TableCell align="left">
        <h6>{certificate.email}</h6>
      </TableCell>
      <TableCell align="left">
        <h6
          onClick={() => {
            navigator.clipboard.writeText(certificate.image);
          }}
        >
          <div className="clickable-blue">
            <FontAwesomeIcon icon={faCopy} />
          </div>
        </h6>
      </TableCell>
      <TableCell align="left">
        {certificate.email_sent ? (
          <FontAwesomeIcon color="green" icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon color="red" icon={faCross} />
        )}
        {/* <h6>{certificate.email_sent}</h6> */}
      </TableCell>
      <TableCell align="left">
        <div className="center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onMailSend(certificate.id, true);
            }}
          >
            Mail
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

          <a
            style={{ margin: "0px", padding: "0px" }}
            href={`${certificate.certificate_url}`}
            target="_blank"
          >
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onEdit(certificate.desc);
              }}
            >
              view
            </Button>
          </a>

          {/* <Popup
          trigger={<a href="#"> View</a>}
          position="right center"
          closeOnDocumentClick
        >
          <div>{certificate.desc}</div>
        </Popup> */}
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
          certificate={certificate}
          onEdit={onEdit}
          setShowEditForm={setShowEditForm}
        />
        <MyModal
          show={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            onDelete(certificate.id);
            setShowDeleteModal(false);
          }}
        />
        {/* <MailSendPopup
          show={showMailSend}
          onCancel={() => {
            setShowMailSend(false);
          }}
          onSendAll={() => {
            onMailSend(certificate.id, true);
            setShowMailSend(false);
          }}
          onSendFiltered={() => {
            onMailSend(certificate.id, false);
            setShowMailSend(false);
          }}
        /> */}
      </TableCell>
    </TableRow>
  );
};
