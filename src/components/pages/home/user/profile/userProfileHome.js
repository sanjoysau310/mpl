import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./userProfile.css";
import { UserProfilePic } from "./userProfilePic";
import { UserProfileOverview } from "./userProfileOverview";
import { UserProfileEdit } from "./userProfileEdit";
import { UserProfileSettings } from "./userProfileSettings";
import { UserProfileChangePassword } from "./userProfileChangePassword";
import { Spinner, Tab, Tabs } from "react-bootstrap";
import { UserProfilePOA } from "./userProfilePOA";
import { useFirebase } from "../../../../../context/firebase";
import { Mpl2k24 } from "../mpl-2k24/mpl2k24";
import { Owner } from "../mpl-2k24/register/owner/owner";
import { Register } from "../mpl-2k24/register/register";

export const UserProfileHome = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [profile, setProfile] = useState("");

  const mpl2k24 = <Mpl2k24 />;

  useEffect(() => {
    firebase.getUserByID(params.id).then((res) => setProfile(res.data()));
  }, []);

  const [key, setKey] = useState("Overview");

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
                      <div className="mt-5 mb-5 p-5 text-center">
                        <h5>Coming Soon</h5>
                      </div>
                    </Tab>
                    {/* <Tab eventKey="Settings" title="Settings">
                      <UserProfileSettings />
                      <div className="mt-5 mb-5 p-5 text-center">
                        <h5>Coming Soon</h5>
                      </div>
                    </Tab> */}
                    <Tab eventKey={mpl2k24} title={mpl2k24}>
                      <Register />
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
