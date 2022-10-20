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

  const submit = () => {
    if (!dataFile || !templateImage || !mappingFile) {
      alert("Blank detected");
    } else {
      props.bulkGenerate(dataFile, templateImage, mappingFile);
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
              value={dataFile}
              onChange={(e) => {
                console.log(e);
                setDatFile(e.target.value);
              }}
              placeholder="Certificate Name"
            />
          </Col>
          <Col>
            <div id="labels">Image Template</div>
            <Form.Control
              type="file"
              size="lg"
              value={templateImage}
              onChange={(e) => {
                setTemplateFile(e.target.value);
              }}
              placeholder="Description"
            />
          </Col>
          <Col>
            <div id="labels">Mapping File</div>
            <Form.Control
              type="file"
              size="lg"
              value={mappingFile}
              onChange={(e) => {
                setMappingFile(e.target.value);
              }}
              placeholder="StartDate"
            />
          </Col>
        </Row>
        <Row>
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
