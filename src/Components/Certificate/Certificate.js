import { CertificateTable } from "./CertificateTable";

import { SearchBar } from "../Filters";
import { InputField } from "./AddCertificateForm";
import React, { useState, useEffect } from "react";
import axios from "../../lib/api";
import handle_errors from "../../lib/utils";
import { useParams } from "react-router-dom";

function Certificate({ setLoaderMessage, setToastData, setLoading }) {
  let { category_id } = useParams();
  const onDelete = async (certificate_id) => {
    let res;
    try {
      setLoading(true);
      res = await axios.delete(`/cer/${certificate_id}`);
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
    let res;
    console.log("edited_certificate", edited_certificate);
    try {
      res = await axios.put(
        `/certificates/${old_certificate.id}/`,
        JSON.stringify(edited_certificate)
      );
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
    let res;
    try {
      // res = await axios.post(
      //   "/generate-bulk-certificate/",
      //   JSON.stringify({
      //     name: name,
      //     description: desc,
      //     start_date: date1,
      //     end_date: date2,
      //     location: "Kathmandu",
      //   })
      // );
      res = [];
      setCertificates([...certificates, res.data]);
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
