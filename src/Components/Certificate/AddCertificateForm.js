import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const InputField = (props) => {
  // input for 3 files data file, template file and mapping file

  const [dataFile, setDatFile] = useState(null);
  const [templateImage, setTemplateFile] = useState(null);
  const [mappingFile, setMappingFile] = useState(null);
  const [manualPositioing, setManualPositioning] = useState(false);

  const submit = () => {
    if (!dataFile || !templateImage || !mappingFile) {
      alert("Blank detected");
    } else {
      props.bulkGenerate(
        dataFile,
        templateImage,
        mappingFile,
        manualPositioing
      );
    }
  };

  return (
    <>
      <h4>Generate Bulk Certificate</h4>
      <Form>
        <Row>
          <Col>
            <div id="labels">Data File(CSV)</div>
            <Form.Control
              type="file"
              size="lg"
              onChange={(e) => {
                setDatFile(e.target.files[0]);
              }}
              placeholder="Certificate Name"
            />
          </Col>
          <Col>
            <div id="labels">Image Template</div>
            <Form.Control
              type="file"
              size="lg"
              onChange={(e) => {
                setTemplateFile(e.target.files[0]);
              }}
              placeholder="Description"
            />
          </Col>
          <Col>
            <div id="labels">Mapping File</div>
            <Form.Control
              type="file"
              size="lg"
              onChange={(e) => {
                setMappingFile(e.target.files[0]);
              }}
              placeholder="StartDate"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="checkbox">
              <Form.Check
                inline
                label="Use manual position in mapping file"
                onChange={(e) => {
                  setManualPositioning(!manualPositioing);
                }}
                type={"checkbox"}
              />
              {/* <span></span> */}
            </div>
          </Col>
          <Col>
            <div className="btn">
              <Button variant="primary" type="button" onClick={submit}>
                Bulk Generate
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};
