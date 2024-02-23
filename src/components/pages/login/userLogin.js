import React, { useEffect, useState } from "react";
import login from "../../../assets/images/backgrounds/login/login4.jpg";
import mplLogo from "../../../assets/images/logos/mpl.png";
import "./userLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "./googleLogin";
import { useFirebase } from "../../../context/firebase";
import { Spinner } from "../../layouts/spinner";

export const UserLogin = () => {
  const firebase = useFirebase();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [userProfile, setUserProfile] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    //setUserProfile("");
    console.log(userProfile);
    if (userProfile != "") {
      console.log("userProfile");
      if (userProfile.accessType === "user")
        navigate(`/playerHome/${userProfile.fid}`, { replace: true });
    } else if (userProfile.accessType === "admin")
      navigate("/admin", { replace: true });
    else navigate("/login", { replace: true });
  }, [userProfile]);

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
    setLoading(true);
    const authResponse = await firebase.loginUser(user.email, user.password);
    console.log(authResponse._tokenResponse.idToken);
    const dbResponse = await firebase.getUserByIDFromDB(authResponse.user.uid);
    //console.log(dbResponse.val());
    dbResponse.val() ? setLoading(false) : setLoading(true);
    setUserProfile(dbResponse.val());
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="bg-light p-3 p-md-4 p-xl-5">
          <div className="container position-relative mt-3">
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
                              <div className="mb-4">
                                <div className="text-center mb-4">
                                  <a href="#!">
                                    <img
                                      src={mplLogo}
                                      alt="BootstrapBrain Logo"
                                      width="175"
                                      height="105"
                                    />
                                  </a>
                                </div>
                                <h4 className="text-center">
                                  Welcome back you've been missed!
                                </h4>
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
                                <div className="form-floating mb-3">
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
                                <div className="form-floating mb-3">
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    id="password"
                                    placeholder="Password"
                                    required
                                  />
                                  <label
                                    htmlFor="password"
                                    className="form-label">
                                    Password
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    name="remember_me"
                                    id="remember_me"
                                  />
                                  <label
                                    className="form-check-label text-secondary"
                                    htmlFor="remember_me">
                                    Keep me logged in
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-grid">
                                  <button className="login-btn" type="submit">
                                    Log in
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div className="row">
                            <div className="col-12">
                              <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                Not a member yet?
                                <i className="link">
                                  <Link
                                    to="/register"
                                    className="text-decoration-none">
                                    Create new account
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
      )}
    </>
  );
};
