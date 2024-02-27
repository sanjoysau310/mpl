import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import poaSample from "../../../../../../assets/images/poa/poa.png";
import { UserPOA } from "./userPOA";
import { InvalidInput } from "../../../../../../utils/errors/invalidInput";
import { useFirebase } from "../../../../../../hooks/firebase/useFirebase";
import { useDispatch, useSelector } from "react-redux";

export const UserProfilePOA = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [poa, setPOA] = useState("");
  const [message, setMessage] = useState("");

  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const { uid, poaURL } = profile;

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size > 0.3 * 1024 * 1024) {
        setMessage("Please upload an image less than 300KB");
        setPOA("");
      } else {
        setPOA(e.target.files[0]);
        setMessage("");
      }
    }
  };

  console.log(poa);
  console.log(message);

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
              accept="image/*"
              type="file"
              name="poa"
              onChange={handleFile}
            />
          </div>
        </div>
        <div className="text-center">
          <InvalidInput message={message} />
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={message != "" || poa === ""}>
            Upload
          </button>
        </div>
      </form>
      <div className="d-flex flex-column align-items-center mt-5 mb-3">
        {poaURL !== "" ? (
          <UserPOA poaURL={poaURL} />
        ) : (
          <img src={poaSample} alt="User" className="img-fluid" />
        )}
      </div>
    </div>
  );
};
