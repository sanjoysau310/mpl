import React, { useState } from "react";
import login from "../../../assets/images/backgrounds/login/login4.jpg";
import mplLogo from "../../../assets/images/logos/mpl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./userRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../../../context/firebase";

export const UserRegister = () => {
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
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    loading="lazy"
                    src={login}
                    alt="Welcome back you've been missed!"
                  />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-3">
                            <div className="text-center">
                              <a href="#!">
                                <img
                                  src={mplLogo}
                                  alt="BootstrapBrain Logo"
                                  width="125"
                                  height="75"
                                />
                              </a>
                            </div>
                            <h4 className="text-center">Become a member</h4>
                          </div>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-12">
                          <div className="d-flex gap-3 flex-column mt-3">
                            <a
                              href="#!"
                              className="btn btn-lg btn-outline-dark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-google"
                                viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                              </svg>
                              <span className="ms-2 fs-6">
                                Log in with Google
                              </span>
                            </a>
                          </div>
                          <p className="text-center mt-3 mb-3">
                            Or sign in with
                          </p>
                        </div>
                      </div> */}
                      <form onSubmit={handleSubmit}>
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
                      <div className="row">
                        <div className="col-12">
                          <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-3">
                            Already have an account?
                            <i className="link">
                              <Link
                                to="/login"
                                className="text-decoration-none">
                                Sign in
                              </Link>
                            </i>
                            {/* <a
                              href="#!"
                              className="link-secondary text-decoration-none">
                              Forgot password
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
