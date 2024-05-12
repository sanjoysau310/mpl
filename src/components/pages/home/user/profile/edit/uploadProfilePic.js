import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../context/firebase";
import { Form } from "react-bootstrap";

import pImageSample from "../../../../../../assets/images/home/avatar.png";
import { UserPOA } from "../poa/userPOA";
import { useDispatch, useSelector } from "react-redux";
import { UserPhotos } from "../main/userPhotos";
import { UploadImage } from "../pic/crop/uploadImage";

export const UploadProfilePic = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [pImage, setpImage] = useState("");

  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const { name, uid, imageURL, played } = profile;

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size > 0.3 * 1024 * 1024) {
        setpImage("");
      } else {
        setpImage(e.target.files[0]);
      }
    }
  };

  const uploadImageData = () => {
    firebase.uploadImageToStoregae(uid, pImage);
    //.then((res) => window.location.reload());
    //window.location.reload(false);
  };
  return (
    <div
      className="tab-pane fade show active pt-3"
      id="profile-change-password">
      <form onSubmit={uploadImageData}>
        <div className="row mb-3">
          <label
            htmlFor="currentPassword"
            className="col-md-4 col-lg-3 col-form-label">
            Profile Picture
            <br />
            (Image with frontFace clearly visible)
          </label>
          <div className="col-md-8 col-lg-9">
            {/* <Form.Control
              accept="image/*"
              type="file"
              name="pImage"
              onChange={handleFile}
            /> */}
            <UploadImage
              setpImage={setpImage}
              uploadImageData={uploadImageData}
            />
          </div>
        </div>
        <div className="text-center">
          {/* <InvalidInput message={message} /> */}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            // disabled={message != "" || pImage === ""}>
          >
            Upload
          </button>
        </div>
      </form>
      <div className="d-flex flex-column align-items-center mt-5 mb-3">
        {imageURL !== "" ? (
          <UserPhotos imageURL={imageURL} />
        ) : (
          <img src={pImageSample} alt="User" className="img-fluid" />
        )}
      </div>
    </div>
  );
};
