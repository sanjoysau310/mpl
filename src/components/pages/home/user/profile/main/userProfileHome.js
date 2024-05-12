import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./userProfile.css";
import { UserProfilePic } from "../pic/userProfilePic";
import { UserProfileOverview } from "../overview/userProfileOverview";
import { UserProfileSettings } from "../settings/userProfileSettings";
import { UserProfileChangePassword } from "../settings/userProfileChangePassword";
import { Tab, Tabs } from "react-bootstrap";
import { UserProfilePOA } from "../poa/userProfilePOA";
import { Mpl2k24 } from "../../mpl-2k24/mpl2k24";
import { Owner } from "../../mpl-2k24/register/owner/owner";
import { Register } from "../../mpl-2k24/register/register";
import { useDispatch, useSelector } from "react-redux";
import { tabActions } from "../../../../../../store/slices/tabSlice";
import { useFirebase } from "../../../../../../hooks/firebase/useFirebase";
import { setProfile } from "../../../../../../store/slices/userSlice";
import { Loading } from "../../../../../layouts/loading";
import { UserPOA } from "../poa/userPOA";
import { UserProfileEdit } from "../edit-old/userProfileEdit";

export const UserProfileHome = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const key = useSelector((state) => state.tab.key);
  const profile = useSelector((state) => state.user.profile);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const mpl2k24 = <Mpl2k24 />;

  useEffect(() => {
    firebase.getUserByID(params.id).then((res) => {
      dispatch(setProfile(res.data()));
    });
  }, []);

  console.log(profile);
  console.log(isLoading);

  return (
    <>
      {profile === "" ? (
        <Loading />
      ) : (
        <section className="section profile">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xl-4">
                <UserProfilePic />
              </div>
              <div className="col-sm-8 col-md-8 col-xl-8">
                <div className="card">
                  <div className="card-body pt-3"></div>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => dispatch(tabActions.changeTab(k))}>
                    {profile.address != "" ? (
                      <Tab eventKey="Overview" title="Overview">
                        <UserProfileOverview />
                      </Tab>
                    ) : (
                      <Tab eventKey="Edit Profile" title="Edit Profile">
                        <UserProfileEdit />
                      </Tab>
                    )}
                    {profile.poaURL != "" ? (
                      <Tab eventKey="Address Proof" title="Address Proof">
                        <div className="d-flex flex-column align-items-center mt-5 mb-3">
                          <UserPOA poaURL={profile.poaURL} />
                        </div>
                      </Tab>
                    ) : (
                      <Tab
                        eventKey="Upload Address Proof"
                        title="Upload Address Proof">
                        <UserProfilePOA />
                      </Tab>
                    )}
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
