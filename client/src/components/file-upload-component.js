import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import ResponseModal from "../modals/response-modal";
import "./file-upload-component.css";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const [resdata, setResdata] = useState();
  const handleChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (!file) return;
  };

  const handleUpload = async () => {
    const data = new FormData();
    data.append("file", file);

    try {
      console.log(data);
      const response = await fetch("http://localhost:5000/api/analyze-file", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      console.log(result);
      setResdata(result);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="upload-card">
      <div className="file-input">
        <input type="file" onChange={handleChange} />
        <div className="sub-btn">
          <button onClick={handleUpload}>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Process
          </button>
        </div>
      </div>
      {show ? (
        <>
          <div className="res-modal">
            <ResponseModal onClose={() => setShow(false)} show={show} data={resdata} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUpload;
