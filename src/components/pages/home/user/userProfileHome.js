import React, { useEffect, useState } from "react";
import "./userProfile.css";
import { UserProfilePic } from "./userProfilePic";
import { UserProfileOverview } from "./userProfileOverview";
import { UserProfileEdit } from "./userProfileEdit";
import { UserProfileSettings } from "./userProfileSettings";
import { UserProfileChangePassword } from "./userProfileChangePassword";
import { Spinner, Tab, Tabs } from "react-bootstrap";
import { UserProfilePOA } from "./userProfilePOA";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../context/firebase";

export const UserProfileHome = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [profile, setProfile] = useState("");

  //console.log(firebase.isLoggedIn);

  useEffect(() => {
    firebase.getUserByID(params.id).then((res) => setProfile(res.data()));
  }, []);

  //const { email, name, uid, imageURL, phone } = profile;

  const [key, setKey] = useState("Overview");

  console.log(profile);

  return (
    <>
      {profile === "" ? (
        <Spinner />
      ) : (
        <section className="section profile">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xl-4">
                <UserProfilePic profile={profile} />
              </div>
              <div className="col-sm-8 col-md-8 col-xl-8">
                <div className="card">
                  <div className="card-body pt-3"></div>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}>
                    <Tab eventKey="Overview" title="Overview">
                      <UserProfileOverview profile={profile} />
                    </Tab>
                    <Tab eventKey="Edit Profile" title="Edit Profile">
                      <UserProfileEdit profile={profile} />
                    </Tab>
                    <Tab
                      eventKey="Upload Address Proof"
                      title="Upload Address Proof">
                      <UserProfilePOA profile={profile} />
                    </Tab>
                    <Tab eventKey="Change Password" title="Change Password">
                      {/* <UserProfileChangePassword /> */}
                      Coming Soon
                    </Tab>
                    <Tab eventKey="Settings" title="Settings">
                      {/* <UserProfileSettings /> */}
                      Coming Soon
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
