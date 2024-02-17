import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "./googleLogin";
import { useFirebase } from "../../../context/firebase";
export const Login = () => {
  const firebase = useFirebase();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   if (firebase) {
  //     firebase.userProfile.role === "admin"
  //       ? navigate("/")
  //       : firebase.userProfile.role === "admin"
  //       ? navigate("/playerHome")
  //       : navigate("/login");
  //   }
  // }, []);

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

    firebase.loginUser(user.email, user.password).then((res) => {
      firebase.getUserByIDFromDB(res.user.uid).then((res) => {
        console.log(res.val());
        const { role, fid } = res.val();
        navigate(`/playerHome/${fid}`);
      });
    });

    // if (firebase) {
    //       firebase.userProfile.role === "admin"
    //         ? navigate("/")
    //         : firebase.userProfile.role === "admin"
    //         ? navigate("/playerHome")
    //         : navigate("/login");
    //     }
  };

  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 login-bg"></div>
          <div className="col-md-6">
            <div className="section-header">
              <h2>Login</h2>
              <p>.</p>
            </div>
            <div className="form">
              <form
                role="form"
                className="php-email-form"
                onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
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
                <div className="text-center mt-3">
                  <button type="submit">Login</button>
                </div>

                {/* <h4 className="hr-lines">Or</h4>
            <div className="row d-flex justify-content-center mt-3">
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="text-center mt-3">
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
                Not a member yet? <Link to="/register">Join Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
