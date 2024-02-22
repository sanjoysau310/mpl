import React from "react";
import { Form } from "react-bootstrap";

export const UserProfilePOA = () => {
  return (
    <div
      className="tab-pane fade show active pt-3"
      id="profile-change-password">
      <form>
        <div className="row mb-3">
          <label
            htmlFor="currentPassword"
            className="col-md-4 col-lg-3 col-form-label">
            Address Proof
            <br />
            (Preffered Aadhaar Card)
          </label>
          <div className="col-md-8 col-lg-9">
            <Form.Control type="file" />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};
