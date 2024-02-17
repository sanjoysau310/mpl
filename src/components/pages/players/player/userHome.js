import React, { useEffect, useState } from "react";
import "./userHome.css";

import pp from "../../../../assets/images/home/pp.png";
import { useFirebase } from "../../../../context/firebase";
import { UploadImage } from "../profile/crop/uploadImage";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../../../layouts/spinner";
import { UserPicture } from "./userPicture";

export const UserHome = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [pImage, setpImage] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    firebase.getUserByID(params.id).then((res) => setProfile(res.data()));
  }, []);

  const { email, name, uid, imageURL, phone } = profile;

  const uploadImageData = () => {
    firebase.uploadImageToStoregae(profile.uid, pImage);
    // .then((res) => navigate(`/playerHome/${params.id}`));
    //window.location.reload(false);
  };

  return (
    <>
      {profile === "" ? (
        <Spinner />
      ) : (
        <section id="user-details">
          <div className="container">
            <div className="section-header">
              <h2>User Details</h2>
              <p>.</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                {imageURL !== "" ? (
                  <UserPicture imageURL={imageURL} />
                ) : (
                  <img
                    src={pImage === "" ? pp : URL.createObjectURL(pImage)}
                    alt="User"
                    className="img-fluid"
                  />
                )}

                {/* <ProfilePicture /> */}
                <UploadImage
                  setpImage={setpImage}
                  uploadImageData={uploadImageData}
                />
                {/* <Upload setpImage={setpImage} /> */}
                {/* {pImage && <button className="image-upload-btn" type="submit">Upload</button>} */}
              </div>
              <div className="col-md-6">
                <div className="details">
                  <h2>Full Name-{name}</h2>
                  {/* <div className="social">
                <a href>
                  <i className="bi bi-twitter" />
                </a>
                <a href>
                  <i className="bi bi-facebook" />
                </a>
                <a href>
                  <i className="bi bi-instagram" />
                </a>
                <a href>
                  <i className="bi bi-linkedin" />
                </a>
              </div> */}
                  <p>{email}</p>
                  <p>{phone}</p>
                  <p>{uid}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
