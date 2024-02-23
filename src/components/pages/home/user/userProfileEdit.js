import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../context/firebase";

export const UserProfileEdit = ({ profile }) => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const [editProfile, setEditProfile] = useState({
    id: params.id,
    dob: "",
    role: "",
    batting: "",
    bowling: "",
    address: "",
  });

  const type = "radio";
  const { email, name, uid, imageURL, phone } = profile;

  const handleChange = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editProfile);
    firebase.updateUserToStore(editProfile).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="tab-pane fade show active profile-edit pt-3">
      {/* Profile Edit Form */}
      <form onSubmit={handleSubmit}>
        {/* <div className="row mb-3">
          <label
            htmlFor="profileImage"
            className="col-md-4 col-lg-3 col-form-label">
            Profile Image
          </label>
          <div className="col-md-8 col-lg-9">
            <img src="assets/img/profile-img.jpg" alt="Profile" />
            <div className="pt-2">
              <a
                href="#"
                className="btn btn-primary btn-sm"
                title="Upload new profile image">
                <i className="bi bi-upload" />
              </a>
              <a
                href="#"
                className="btn btn-danger btn-sm"
                title="Remove my profile image">
                <i className="bi bi-trash" />
              </a>
            </div>
          </div> 
        </div>*/}
        <div className="row mb-3">
          <label
            htmlFor="fullName"
            className="col-md-4 col-lg-3 col-form-label">
            Full Name
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="fullName"
              value={name}
              disabled
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">
            Phone
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="phone"
              type="text"
              className="form-control"
              id="Phone"
              value={phone}
              disabled
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">
            Email
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="email"
              type="email"
              className="form-control"
              id="Email"
              value={email}
              disabled
            />
          </div>
        </div>
        {/* <div className="row mb-3">
          <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">
            About
          </label>
          <div className="col-md-8 col-lg-9">
            <textarea
              name="about"
              className="form-control"
              id="about"
              style={{ height: 100 }}
              defaultValue={
                "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."
              }
            />
          </div>
        </div> */}
        <div className="row mb-3">
          <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">
            DOB
          </label>
          <div className="col-md-8 col-lg-9">
            {/* <input name="dob" type="date" className="form-control" id="dob" /> */}
            <Form.Control
              type="date"
              name="dob"
              value={editProfile.dob}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">
            Role
          </label>
          <div className="col-md-8 col-lg-9">
            <Form.Select
              aria-label="Default select example"
              // value={editProfile.role}
              name="role"
              onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All Rounder">All Rounder</option>
              <option value="Wicket Keepr">Wicket Keepr</option>
            </Form.Select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">
            Batting Style
          </label>
          <div className="col-md-8 col-lg-9">
            <Form.Check
              inline
              label="Left"
              name="batting"
              type="radio"
              value="Left Hand"
              onChange={handleChange}
              id="inline-radio-Left"
            />
            <Form.Check
              inline
              label="Right"
              name="batting"
              type="radio"
              value="Right Hand"
              onChange={handleChange}
              id="inline-radio-Right"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">
            Bowling Style
          </label>
          <div className="col-md-8 col-lg-9">
            <Form.Check
              inline
              label="Left"
              name="bowling"
              type="radio"
              value="Left Hand"
              onChange={handleChange}
              id="inline-radio-Left"
            />
            <Form.Check
              inline
              label="Right"
              name="bowling"
              type="radio"
              value="Right Hand"
              onChange={handleChange}
              id="inline-radio-Right"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">
            Address
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="address"
              type="text"
              className="form-control"
              value={editProfile.address}
              onChange={handleChange}
              id="Address"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
      {/* End Profile Edit Form */}
    </div>
  );
};
