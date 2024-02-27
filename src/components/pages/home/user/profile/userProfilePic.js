import React, { useEffect, useState } from "react";
import pp from "../../../../../assets/images/home/pp.png";
import login from "../../../../../assets/images/backgrounds/login/login1.jpg";
import { UserPicture } from "../../../players/player/userPicture";
import { UploadImage } from "../../../players/profile/crop/uploadImage";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../hooks/useFirebase";
import { useDispatch, useSelector } from "react-redux";

export const UserProfilePic = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [pImage, setpImage] = useState("");

  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const { name, uid, imageURL, played } = profile;

  const uploadImageData = () => {
    firebase.uploadImageToStoregae(uid, pImage);
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
          <img
            src={pImage === "" ? pp : URL.createObjectURL(pImage)}
            alt="User"
            className="img-fluid"
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
        <h2>{name}</h2>
        <h6 className="mt-2">Previouly Played- {played}</h6>
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
