import React, { useState } from "react";
import "./profilePicture.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import pp from "../../../../assets/images/home/pp.png";

export const ProfilePicture = ({ onImageSelected }) => {
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size > 0.3 * 1024 * 1024) {
        setMessage("Please upload an image less than 300KB");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (e) {
          //console.log(reader.result);
          onImageSelected(reader.result);
        };
        setImage(e.target.files[0]);
        setMessage("");
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <label htmlFor="file-input" className="">
        <i>
          <FontAwesomeIcon icon={faCamera} size="2x" />
        </i>
      </label>
      <div className="file-input">
        <input id="file-input" type="file" onChange={handleFile} />
      </div>
      {message}
    </div>
  );
};
