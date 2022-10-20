import { CertificateTable } from "./CertificateTable";

import { SearchBar } from "../Filters";
import { InputField } from "./AddCertificateForm";
import React, { useState, useEffect } from "react";
import handle_errors from "../../lib/utils";
import { useParams } from "react-router-dom";
import axios from "../../lib/api";

function Certificate({ setLoaderMessage, setToastData, setLoading }) {
  let { category_id, event_id } = useParams();
  const onDelete = async (certificate_id) => {
    let res;
    try {
      setLoading(true);
      res = await axios.delete(`/certificates/${certificate_id}`);
      setCertificates(
        certificates.filter((c) => {
          return c.id !== certificate_id;
        })
      );
      setLoading(false);
      setToastData({
        title: "Success",
        message: "Certificate Deleted successfully",
        intent: "success",
      });
    } catch (err) {
      handle_errors(err, setToastData, setLoading);
      console.log(err);
    }
  };
  const onEdit = async (edited_certificate, old_certificate) => {
    let formData = new FormData();
    formData.append("name", edited_certificate.name);
    formData.append("email", edited_certificate.email);
    formData.append("event", event_id);
    formData.append("category", category_id);
    formData.append("active", edited_certificate.active);
    if (edited_certificate.image) {
      formData.append("image", edited_certificate.image);
    }
    let res;

    console.log("edited_certificate", edited_certificate);
    try {
      res = await axios({
        method: "put",
        url: `certificates/${old_certificate.id}/`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      // certificates that are not edited
      let rest_certificates = certificates.filter((c) => {
        return c.name !== old_certificate.name;
      });
      setCertificates([...rest_certificates, res.data]);
      setToastData({
        title: "Success",
        message: "Certificate edited successfully",
        intent: "success",
      });
    } catch (err) {
      handle_errors(err, setToastData, setLoading);
      console.log(err);
    }
  };

  const bulkGenerate = async (data_file, template_image, mapping_file) => {
    let formData = new FormData();
    formData.append("csv_file", data_file);
    formData.append("template_image", template_image);
    formData.append("mapping", mapping_file);
    formData.append("event", event_id);
    formData.append("category", category_id);
    try {
      const res = await axios({
        method: "post",
        url: "generate-bulk-certificate/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      let response = await axios.get(`certificates/?category=${category_id}`);
      setCertificates([...certificates, response.data]);
      setToastData({
        title: "Success",
        message: "Certificate generated successfully",
        intent: "success",
      });
    } catch (err) {
      console.log(err);
      handle_errors(err, setToastData, setLoading);
    }
  };
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let res = await axios.get(`certificates/?category=${category_id}`);
        setCertificates(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        handle_errors(err, setToastData, setLoading);
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div style={{ height: "25%" }}>
        <InputField bulkGenerate={bulkGenerate} />
      </div>
      <div style={{ height: "10%" }}>
        {" "}
        <SearchBar />
      </div>
      <div style={{ height: "64%", overflowY: "scroll" }}>
        <CertificateTable
          certificates={certificates}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    </>
  );
}

export default Certificate;
