import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../context/firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserPicture } from "../pic/userPicture";
import { Image } from "react-bootstrap";
import { UploadImage } from "../pic/crop/uploadImage";

import pp from "../../../../../../assets/images/home/pp.png";

export const UserPhotos = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [pImage, setpImage] = useState("");

  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const { name, uid, imageURL, played } = profile;

  const uploadImageData = () => {
    firebase.uploadImageToStorege(uid, pImage);
    //.then((res) => window.location.reload());
    //window.location.reload(false);
  };
  //console.log(pImage);
  return (
    <div className="card">
      <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
        {/* <img src={pp} alt="Profile" className="rounded-circle" /> */}
        {imageURL !== "" ? (
          <UserPicture imageURL={imageURL} />
        ) : (
          <Image
            src={pImage === "" ? pp : URL.createObjectURL(pImage)}
            alt="User"
            //className="img-fluid"
            rounded
          />
        )}
        <hr />
        {pImage !== "" && (
          <img
            src={URL.createObjectURL(pImage)}
            alt="User"
            className="img-fluid"
          />
        )}
        <span className="mt-3">
          <UploadImage
            setpImage={setpImage}
            uploadImageData={uploadImageData}
          />
        </span>
      </div>
    </div>
  );
};
