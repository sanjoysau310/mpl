import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Create Event</h3>
            <i className="card_icon">
              <FontAwesomeIcon icon={faHouse} />
            </i>
          </div>
          {/* <h1>300</h1> */}
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Manage Event</h3>
            <i className="card_icon">
              <FontAwesomeIcon icon={faHouse} />
            </i>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Meeting</h3>
            <i className="card_icon">
              <FontAwesomeIcon icon={faHouse} />
            </i>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Upload Image</h3>
            <i className="card_icon">
              <FontAwesomeIcon icon={faHouse} />
            </i>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
