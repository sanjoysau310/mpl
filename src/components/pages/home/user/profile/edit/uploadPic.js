import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../context/firebase";
import { Form } from "react-bootstrap";

import pImageSample from "../../../../../../assets/images/home/avatar.png";
import { UserPOA } from "../poa/userPOA";
import { useDispatch, useSelector } from "react-redux";
import { UserPhotos } from "../main/userPhotos";
import { UploadImage } from "../pic/crop/uploadImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { CropImage } from "./upload/crop/CropImage";
import { UploadPicModal } from "../../../../../../utils/modals/uploadPicModal";
import { setImage } from "../../../../../../store/slices/imageSlice";

export const UploadPic = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  //const [image, setImage] = useState("");
  const image = useSelector((state) => state.image.image);

  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const { name, uid, imageURL, played } = profile;

  // const handleFile = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     if (e.target.files[0].size > 0.3 * 1024 * 1024) {
  //       setImage("");
  //     } else {
  //       setImage(e.target.files[0]);
  //     }
  //   }
  // };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        dispatch(setImage(reader.result));
      };
    }
  };

  const uploadImageData = () => {
    firebase.uploadImageToStoregae(uid, image);
    //.then((res) => window.location.reload());
    //window.location.reload(false);
  };
  return (
    <>
      {/* <UploadImage setpImage={setpImage} uploadImageData={uploadImageData} /> */}
      <label htmlFor="file-input" className="">
        <i>
          <FontAwesomeIcon icon={faCamera} />
        </i>
      </label>
      <div className="file-input">
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      {/* {image && (
        <div>
          <CropImage image={image} />
        </div>
      )} */}
    </>
  );
};
