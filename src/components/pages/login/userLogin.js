import React, { useEffect, useState } from "react";
import login from "../../../assets/images/backgrounds/login/login4.jpg";
import mplLogo from "../../../assets/images/logos/mpl.png";
import "./userLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "./googleLogin";
import { Spinner } from "../../layouts/spinner";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../../store/slices/userSlice";
import { LoginForm } from "./loginForm";
import { useFirebase } from "../../../hooks/useFirebase";
import { useAuth } from "../../../hooks/useAuth";

export const UserLogin = () => {
  const firebase = useFirebase();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useAuth();
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (auth != "") {
      if (auth.accessType === "user")
        navigate(`/playerHome/${user.fid}`, { replace: true });
    } else if (auth.accessType === "admin")
      navigate("/admin", { replace: true });
    else navigate("/login", { replace: true });
  }, [auth]);

  const handleLogin = async (e, user) => {
    e.preventDefault();
    await firebase.loginUser(user.email, user.password);

    // const authResponse = await firebase.loginUser(user.email, user.password);
    // console.log(authResponse);
    // dispatch(
    //   authUser({
    //     id: authResponse.user.uid,
    //     email: authResponse.user.email,
    //     token: authResponse.user.accessToken,
    //   })
    // );
    // const dbResponse = await firebase.getUserByIDFromDB(authResponse.user.uid);
    //console.log(dbResponse.val());
    //dbResponse.val() ? setLoading(false) : setLoading(true);
    //setUserProfile(dbResponse.val());
  };

  return (
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
                      <LoginForm handleSubmit={handleLogin} />
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
  );
};
