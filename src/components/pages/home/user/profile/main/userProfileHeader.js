import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEdit,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../hooks/firebase/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { playerTabActions } from "../../../../../../store/slices/playerTabSlice";
import { Mpl2k24 } from "../../mpl-2k24/mpl2k24";
import { UploadPic } from "../edit/uploadPic";

import avatar from "../../../../../../assets/images/home/avatar.png";

export const UserProfileHeader = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const key = useSelector((state) => state.tab.key);
  const profile = useSelector((state) => state.user.profile);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const { name, role, dob } = profile;

  return (
    <div className="profile-header">
      <div className="profile-header-cover" />
      <div className="profile-header-content">
        <div className="profile-header-img">
          <div className="profile-img">
            <img src={avatar} alt="user profile pic" />
          </div>
          <div className="profile-img-upload">
            <i onClick={() => dispatch(playerTabActions.changeTab("Upload"))}>
              <UploadPic />
            </i>

            {/* onClick={() => dispatch(playerTabActions.changeTab("Edit"))} */}
          </div>
        </div>

        <div className="profile-header-info">
          <h4 className="m-t-sm">{name}</h4>
          <p className="m-b-sm">{role}</p>

          {/* <a href="#" className="btn btn-xs btn-primary mb-3">
                Edit Profile
              </a> */}
          {dob !== "" && key !== "Edit" ? (
            <i onClick={() => dispatch(playerTabActions.changeTab("Edit"))}>
              <FontAwesomeIcon icon={faEdit} className="mb-5" />
            </i>
          ) : (
            <i onClick={() => dispatch(playerTabActions.changeTab("Overview"))}>
              <FontAwesomeIcon icon={faKeyboard} className="mb-5" />
            </i>
          )}
        </div>
      </div>
      <ul className="profile-header-tab nav nav-tabs">
        <li className={"nav-item" + (key === "Overview" ? " current-tab" : "")}>
          <i
            onClick={() => dispatch(playerTabActions.changeTab("Overview"))}
            className="nav-link_">
            Overview
          </i>
          {/* <Link to="">Overview</Link> */}
        </li>
        <li className={"nav-item" + (key === "About" ? " current-tab" : "")}>
          <i
            onClick={() => dispatch(playerTabActions.changeTab("About"))}
            className="nav-link_">
            About
          </i>
        </li>
        <li className={"nav-item" + (key === "Photos" ? " current-tab" : "")}>
          <i
            onClick={() => dispatch(playerTabActions.changeTab("Photos"))}
            className="nav-link_">
            Photos
          </i>
        </li>
        <li className="nav-item">
          <i
            onClick={() => dispatch(playerTabActions.changeTab("Event"))}
            className="nav-link_">
            <Mpl2k24 />
          </i>
        </li>
      </ul>
    </div>
  );
};
