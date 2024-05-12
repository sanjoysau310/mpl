import React, { useEffect } from "react";
import "./userProfileMain.css";

import { useDispatch, useSelector } from "react-redux";

import { UserProfileHeader } from "./userProfileHeader";
import { UserOverView } from "./userOverView";
import { UserAbout } from "./userAbout";
import { UserPhotos } from "./userPhotos";
import { UserEvent } from "./userEvent";
import { UserEditMain } from "../edit/userEditMain";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../hooks/firebase/useFirebase";
import { setProfile } from "../../../../../../store/slices/userSlice";
import { Loading } from "../../../../../layouts/loading";
import { UploadPic } from "../edit/uploadPic";
import { CropImage } from "../edit/upload/crop/CropImage";

export const UserProfileMain = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const key = useSelector((state) => state.tab.key);
  const profile = useSelector((state) => state.user.profile);
  const image = useSelector((state) => state.image.image);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.getUserByID(params.id).then((res) => {
      dispatch(setProfile(res.data()));
    });
  }, []);
  console.log(key);

  return (
    <>
      {profile === "" ? (
        <Loading />
      ) : (
        <div className="container">
          <div id="content" className="content p-0">
            <UserProfileHeader />
            <div className="profile-container">
              <div className="row row-space-20">
                <div className="col-md-8">
                  <div className="tab-content p-0">
                    {console.log(profile)}
                    <div className="tab-pane active show" id="profile-about">
                      {profile.dob === "" ? (
                        <UserEditMain />
                      ) : (
                        (() => {
                          switch (key) {
                            case "Overview":
                              return <UserOverView />;
                            case "About":
                              return <UserAbout />;
                            case "Photos":
                              return <UserPhotos />;
                            case "Event":
                              return <UserEvent />;
                            case "Edit":
                              return <UserEditMain />;
                            case "Upload":
                              return <CropImage image={image} />;
                            default:
                              return <UserOverView />;
                          }
                        })()
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
