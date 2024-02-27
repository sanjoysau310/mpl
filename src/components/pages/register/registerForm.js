import React, { useState } from "react";
import login from "../../../assets/images/backgrounds/login/login4.jpg";
import mplLogo from "../../../assets/images/logos/mpl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./userRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../../../context/firebase";

export const RegisterForm = ({ handleSubmit }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, user)}>
      <div className="row gy-3 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleChange}
              id="fullName"
              placeholder="Full Name"
              required
            />
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
              id="email"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-2">
            <input
              type={passwordType}
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
              id="password"
              placeholder="Password"
              required
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            {/* <i onClick={togglePassword}>
                            {passwordType === "password" ? (
                              <FontAwesomeIcon icon={faEye} size="2x" />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                size="2x"
                              />
                            )}
                          </i> */}
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              id="phone"
              placeholder="9922625153"
              required
            />
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="d-grid">
            <button className="login-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
