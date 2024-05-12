import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { UserProfileEdit } from "../edit-old/userProfileEdit";
import { UserProfilePOA } from "../poa/userProfilePOA";
import { useSelector } from "react-redux";
import { EditProfileDetails } from "./editProfileDetails";
import { UploadPOA } from "./uploadPOA";
import { UploadProfilePic } from "./uploadProfilePic";

export const UserEditMain = () => {
  const key = useSelector((state) => state.tab.key);
  return (
    <section className="section profile">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12">
            <div className="card">
              <div className="card-body pt-3"></div>
              <Tabs id="controlled-tab-example">
                <Tab eventKey="Profile" title="Profile">
                  <EditProfileDetails />
                </Tab>
                <Tab eventKey="Picture" title="Picture">
                  <UploadProfilePic />
                </Tab>
                <Tab eventKey="POA" title="POA">
                  <UploadPOA />
                </Tab>
                <Tab eventKey="Change Password" title="Change Password">
                  <div className="mt-5 mb-5 p-5 text-center">
                    <h5>Coming Soon</h5>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
