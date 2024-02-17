import React, { useState } from "react";
import "./userProfile.css";
import { UserProfilePic } from "./userProfilePic";
import { UserProfileOverview } from "./userProfileOverview";
import { UserProfileEdit } from "./userProfileEdit";
import { UserProfileSettings } from "./userProfileSettings";
import { UserProfileChangePassword } from "./userProfileChangePassword";

export const UserProfileHome = () => {
  const [content, setContent] = useState("Overview");

  const showContent = (val) => {
    switch (val) {
      case "Overview":
        return setContent(<UserProfileOverview />);
      case "Edit Profile":
        return setContent(<UserProfileEdit />);
      case "Settings":
        return setContent(<UserProfileSettings />);
      case "Change Password":
        return setContent(<UserProfileChangePassword />);
      default:
        return setContent(<UserProfileOverview />);
    }
  };

  console.log(content);

  return (
    <section className="section profile">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-xl-4">
            <UserProfilePic />
          </div>
          <div className="col-sm-8 col-md-8 col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                {/* Bordered Tabs */}
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button
                      className={
                        content === "Overview" ? "nav-link active" : "nav-link"
                      }
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                      onClick={() => setContent("Overview")}>
                      Overview
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        content === "Edit Profile"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                      onClick={() => setContent("Edit Profile")}>
                      Edit Profile
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        content === "Settings" ? "nav-link active" : "nav-link"
                      }
                      data-bs-toggle="tab"
                      data-bs-target="#profile-settings"
                      onClick={() => setContent("Settings")}>
                      Settings
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        content === "Change Password"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                      onClick={() => setContent("Change Password")}>
                      Change Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  {content === "Edit Profile" ? (
                    <UserProfileEdit />
                  ) : content === "Settings" ? (
                    <UserProfileSettings />
                  ) : content === "Change Password" ? (
                    <UserProfileChangePassword />
                  ) : (
                    <UserProfileOverview />
                  )}
                </div>
                {/* End Bordered Tabs */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
