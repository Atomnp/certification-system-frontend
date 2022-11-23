import { CertificateTable } from "./CertificateTable";

import { SearchBar } from "../Filters";
import { InputField } from "./AddCertificateForm";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "../../lib/api";
import { APIRequestContext } from "../../context";

function Certificate() {
  let { category_id, event_id } = useParams();
  const [certificates, setCertificates] = useState([]);
  const { request_handler, setLoaderMessage } = useContext(APIRequestContext);

  useEffect(() => {
    request_handler(async () => {
      let res = await axios.get(`certificates/?category=${category_id}`);
      setCertificates(res.data);
    });
  }, []);

  const onDelete = async (certificate_id) => {
    request_handler(async () => {
      let res = await axios.delete(`/certificates/${certificate_id}`);
      setCertificates(
        certificates.filter((c) => {
          return c.id !== certificate_id;
        })
      );
    }, "Certificate deleted successfully");
  };
  const onEdit = async (edited_certificate, old_certificate) => {
    request_handler(async () => {
      let formData = new FormData();
      formData.append("name", edited_certificate.name);
      formData.append("email", edited_certificate.email);
      formData.append("event", event_id);
      formData.append("category", category_id);
      formData.append("active", edited_certificate.active);
      if (edited_certificate.image) {
        formData.append("image", edited_certificate.image);
      }
      let res = await axios({
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
    }, "Certificate edited successfully");
  };

  const bulkGenerate = async (
    data_file,
    template_image,
    mapping_file,
    manualPositioing = false
  ) => {
    request_handler(async () => {
      setLoaderMessage("Generating Certificates");
      let formData = new FormData();
      formData.append("csv_file", data_file);
      formData.append("template_image", template_image);
      formData.append("mapping", mapping_file);
      formData.append("event", event_id);
      formData.append("category", category_id);
      formData.append(
        "positioning_method",
        manualPositioing ? "manual" : "auto_detect"
      );
      let res = await axios({
        method: "post",
        url: "generate-bulk-certificate/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCertificates([...certificates, ...res.data]);
    }, "Certificates generated successfully");
  };

  const onMailSend = (certificate_id, send_all) => {
    request_handler(async () => {
      let res = await axios.post(`/send-email/`, {
        send_all: send_all,
        certificate: certificate_id,
      });
      return res;
    });
  };
  return (
    <div className="event-wrapper">
      <div className="add-item-form">
        <InputField bulkGenerate={bulkGenerate} />
      </div>
      <div className="search-and-sort">
        <SearchBar />
      </div>
      <div className="list-view">
        <CertificateTable
          certificates={certificates}
          onDelete={onDelete}
          onEdit={onEdit}
          onMailSend={onMailSend}
        />
      </div>
    </div>
  );
}

export default Certificate;
