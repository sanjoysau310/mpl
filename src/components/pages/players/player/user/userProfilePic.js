import React from "react";
import pp from "../../../../../assets/images/home/pp.png";
import login from "../../../../../assets/images/backgrounds/login/login1.jpg"

export const UserProfilePic = () => {
  return (
    <div className="card">
      <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
        <img src={login} alt="Profile" className="rounded-circle" />
        <h2>Full Name</h2>
        <h3>player</h3>
        <div className="social-links mt-2">
          <a href="#" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};
