import React from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFirebase } from "../../../hooks/firebase/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../store/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const { uid, name, email, accessToken, accessType } = user;
  const handleLogout = async () => {
    dispatch(removeUser());
    await firebase.logoutUser().then(() => {
      navigate("/login", { replace: true });
    });
  };
  return (
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li>
          <NavLink to="" className="nav-link scrollto">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link scrollto">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className="nav-link scrollto">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/players" className="nav-link scrollto">
            Players
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link scrollto">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminHome" className="nav-link scrollto">
            Admin
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={`/playerHome/${id}`} className="nav-link scrollto">
            PlayerHome
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/teams" className="nav-link scrollto">
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className="nav-link scrollto">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/sponsors" className="nav-link scrollto">
            Sponsors
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link scrollto">
            Contact
          </NavLink>
        </li>
        {!accessToken ? (
          <li>
            <NavLink to="/login" className="nav-link scrollto">
              <FontAwesomeIcon icon={faRightFromBracket} size="1x" />
            </NavLink>
          </li>
        ) : (
          <li className="dropdown">
            <a href="#">
              <NavLink
                to="/login"
                //className="login-button scrollto"
                className="nav-link scrollto"
                onClick={handleLogout}>
                <FontAwesomeIcon icon={faUser} size="1x" /> {name}
              </NavLink>
            </a>
            <ul>
              <li>
                <a href="#">My Account Settings</a>
              </li>

              <li>
                <a href="#">Admin Settings</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        )}
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  );
};
