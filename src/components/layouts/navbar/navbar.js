import React from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFirebase } from "../../../context/firebase";
export const Navbar = () => {
  const firebase = useFirebase();
  //console.log(firebase);
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
        {!firebase.isLoggedIn ? (
          <li>
            <NavLink to="/login" className="login-button scrollto">
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/login"
              className="login-button scrollto"
              onClick={firebase.logoutUser}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  );
};
