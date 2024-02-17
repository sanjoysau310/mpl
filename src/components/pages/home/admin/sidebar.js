import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <span className="icon close_icon"></span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <i className="icon"> Dashboard</i>
            <i className="card_icon">
              <FontAwesomeIcon icon={faHouse} />
            </i>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Event</a>
          <i className="card_icon">
              <FontAwesomeIcon icon={faHouse} />
            </i>
        </li>
        <li className="sidebar-list-item">
          <a href="">Admins</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Members</a>
        </li>

        <li className="sidebar-list-item">
          <a href="">Reports</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Setting</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
