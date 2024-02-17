import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <i className="icon" onClick={OpenSidebar}>
          menu
        </i>
      </div>
    </header>
  );
}

export default Header;
