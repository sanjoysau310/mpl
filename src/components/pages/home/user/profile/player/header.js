import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../hooks/firebase/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { playerTabActions } from "../../../../../../store/slices/playerTabSlice";

export const Header = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const key = useSelector((state) => state.tab.key);
  const profile = useSelector((state) => state.user.profile);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();
  return (
    <div className="profile-header">
      <div className="profile-header-cover" />
      <div className="profile-header-content">
        <div className="profile-header-img">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt />
        </div>
        <div className="profile-header-info">
          <h4 className="m-t-sm">Name</h4>
          <p className="m-b-sm">Role</p>
          {/* <a href="#" className="btn btn-xs btn-primary mb-3">
                Edit Profile
              </a> */}
          {key != "Edit" ? (
            <a
              href="#"
              onClick={() => dispatch(playerTabActions.changeTab("Edit"))}>
              <FontAwesomeIcon icon={faEdit} className="mb-5" />
            </a>
          ) : (
            <FontAwesomeIcon icon={faKeyboard} className="mb-5" />
          )}
        </div>
      </div>
      <ul className="profile-header-tab nav nav-tabs">
        <li className="nav-item">
          <a
            href="#"
            onClick={() => dispatch(playerTabActions.changeTab("Overview"))}
            className="nav-link_">
            Overview
          </a>
          {/* <Link to="">Overview</Link> */}
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={() => dispatch(playerTabActions.changeTab("About"))}
            className="nav-link_">
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={() => dispatch(playerTabActions.changeTab("Photos"))}
            className="nav-link_">
            Photos
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={() => dispatch(playerTabActions.changeTab("Event"))}
            className="nav-link_">
            Register Now
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={() => dispatch(playerTabActions.changeTab("Event"))}
            className="nav-link_">
            Registration Details
          </a>
        </li>
      </ul>
    </div>
  );
};
