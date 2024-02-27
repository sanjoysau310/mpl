import React from "react";
import { useSelector } from "react-redux";

export const UserProfileOverview = () => {
  const profile = useSelector((state) => state.user.profile);
  const { email, name, uid, phone, role, batting, bowling, age, address } =
    profile;
  return (
    <div
      className="tab-pane fade profile-overview active show"
      id="profile-overview">
      {/* <h5 className="card-title">About</h5>
      <p className="small fst-italic">
        Sunt est soluta temporibus accusantium neque nam maiores cumque
        temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt
        iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed
        ea saepe at unde.
      </p> */}
      <h5 className="card-title mt-5">Profile Details</h5>
      <div className="row mt-3">
        <div className="col-lg-3 col-md-4 label ">Full Name</div>
        <div className="col-lg-9 col-md-8">{name}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Phone</div>
        <div className="col-lg-9 col-md-8">+91-{phone}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Email</div>
        <div className="col-lg-9 col-md-8">{email}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Role</div>
        <div className="col-lg-9 col-md-8">{role}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Batting Style</div>
        <div className="col-lg-9 col-md-8">{batting}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Bowling Style</div>
        <div className="col-lg-9 col-md-8">{bowling}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Age</div>
        <div className="col-lg-9 col-md-8">{age}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Address</div>
        <div className="col-lg-9 col-md-8">{address}</div>
      </div>
    </div>
  );
};
