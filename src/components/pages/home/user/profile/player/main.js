import React from "react";
import "./main.css";

import { Header } from "./header";
import { PlayerOverView } from "./playerOverView";
import { PlayerAbout } from "./playerAbout";
import { useSelector } from "react-redux";
import { PlayerPhotos } from "./playerPhotos";
import { PlayerEvent } from "./playerEvent";
import { PlayerEditMain } from "./playerEditMain";

export const Main = () => {
  const key = useSelector((state) => state.tab.key);

  return (
    <div className="container">
      <div id="content" className="content p-0">
        <Header />
        <div className="profile-container">
          <div className="row row-space-20">
            <div className="col-md-8">
              <div className="tab-content p-0">
                <div className="tab-pane active show" id="profile-about">
                  {(() => {
                    switch (key) {
                      case "Overview":
                        return <PlayerOverView />;
                      case "About":
                        return <PlayerAbout />;
                      case "Photos":
                        return <PlayerPhotos />;
                      case "Event":
                        return <PlayerEvent />;
                      case "Edit":
                        return <PlayerEditMain />;
                      default:
                        return <PlayerOverView />;
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
