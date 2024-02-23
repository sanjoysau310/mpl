import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../context/firebase";

import poaSample from "../../../../assets/images/poa/poa.png";
import { UserPOA } from "../../players/player/userPOA";

export const UserProfilePOA = ({ profile }) => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [poa, setPOA] = useState("");
  const { name, uid, poaURL } = profile;

  String.prototype.equalsIgnoreCase = function (compareString) {
    return this.toUpperCase() === compareString.toUpperCase();
  };

  const uploadPOAData = (e) => {
    e.preventDefault();
    //console.log(poa);
    firebase.uploadPOAToStoregae(params.id, uid, poa);
    //.then((res) => window.location.reload());
    //window.location.reload(false);
  };
  return (
    <div
      className="tab-pane fade show active pt-3"
      id="profile-change-password">
      <form onSubmit={uploadPOAData}>
        <div className="row mb-3">
          <label
            htmlFor="currentPassword"
            className="col-md-4 col-lg-3 col-form-label">
            Address Proof
            <br />
            (Preffered Aadhaar Card)
          </label>
          <div className="col-md-8 col-lg-9">
            <Form.Control
              type="file"
              name="poa"
              onChange={(e) => setPOA(e.target.files[0])}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
      <div className="d-flex flex-column align-items-center mt-5 mb-3">
        {poaURL !== "" ? (
          <UserPOA poaURL={poaURL} fileType={poaURL.split(".")[1]} />
        ) : (
          <img src={poaSample} alt="User" className="img-fluid" />
        )}
      </div>
    </div>
  );
};
