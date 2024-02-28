import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "../navbar/navbar";

import mplLogo from "../../../assets/images/logos/mpl.png";
import OffcanvasExample from "../navbar/mplNav";
import NavbarTest from "../navbar/navbar-test";

export const Header = () => {
  return (
    // <header id="header" className="d-flex align-items-center ">
    //   <div className="container-fluid d-flex align-items-center justify-content-lg-between">
    //     <h1 className="logo me-auto me-lg-0">
    //       <NavLink to="">MPL</NavLink>
    //     </h1>
    //     <Navbar />
    //     <div className="header-social-links d-flex align-items-center">
    //       <a href="#" className="twitter">
    //         <i>
    //           <FontAwesomeIcon icon={faFacebook} />
    //         </i>
    //       </a>
    //       <a href="#" className="facebook">
    //         <i>
    //           <FontAwesomeIcon icon={faInstagram} />
    //         </i>
    //       </a>
    //       <a href="#" className="instagram">
    //         <i>
    //           <FontAwesomeIcon icon={faWhatsapp} />
    //         </i>
    //       </a>
    //     </div>
    //   </div>
    // </header>

    <header id="header" className="d-flex align-items-center ">
      <div className="container-fluid container-xxl d-flex align-items-center">
        <div id="logo" className="me-auto">
          <NavLink to="" className="scrollto">
            <img src={mplLogo} alt="MPL" title="MPL" />
          </NavLink>
        </div>
        {/* <Navbar /> */}
        <NavbarTest />
        {/* <OffcanvasExample /> */}
      </div>
    </header>
  );
};
