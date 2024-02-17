import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFirebase } from "../../../context/firebase";
import { GoogleLogin } from "../login/googleLogin";

export const Register = () => {
  let navigate = useNavigate();
  const firebase = useFirebase();
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authResponse = await firebase.createUser(user.email, user.password);

    const firestoreResponse = await firebase.addUserToStore(
      authResponse.user.uid,
      user
    );
    console.log(firestoreResponse);
    const dbrResponse = await firebase.addUserToDB(
      authResponse.user.uid,
      firestoreResponse.id,
      user
    );
    console.log(dbrResponse);
    //navigate("/login");
  };
  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Sign up</h2>
          <p>Be a part of Musketeers family</p>
        </div>
        <div className="form">
          <form role="form" className="php-email-form" onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center">
              <div className="form-group col-md-6 mt-3 mt-md-0">
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
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <div className="input-group">
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
                  <div className="input-group-btn">
                    <span className="form-control" onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <i>
                          <FontAwesomeIcon icon={faEye} size="2x" />
                        </i>
                      ) : (
                        <i>
                          <FontAwesomeIcon icon={faEyeSlash} size="2x" />
                        </i>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mt-3">
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  id="phone"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <button type="submit">Submit</button>
            </div>
            {/* <h4 class="hr-lines">Or</h4> */}
            {/* <div className="text-center mt-3">
              <button type="submit">Send OTP</button>
            </div> */}
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
          </form>
          {/* <h4 className="hr-lines">Or</h4>
          <div className="col-md-12 text-center google-btn">
            <GoogleLogin />
          </div> */}

          <div className="col-md-12 text-center mt-5">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
