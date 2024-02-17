import React, { useEffect, useState } from "react";
import "./playersList.css";
import { useFirebase } from "../../../../context/firebase";
import { PlayerCard } from "./playerCard";
import { Spinner } from "../../../layouts/spinner";

export const PlayersList = () => {
  const firebase = useFirebase();
  const [profiles, setProfiles] = useState("");
  useEffect(() => {
    firebase.getAllUsers().then((users) => setProfiles(users.docs));
  }, []);

  return (
    <>
      {profiles === "" ? (
        <Spinner />
      ) : (
        <section id="schedule" className="section-with-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Player List</h2>
              <p>Here is our registered List</p>
            </div>
            <ul
              className="nav nav-tabs"
              role="tablist"
              data-aos="fade-up"
              data-aos-delay={100}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#day-1"
                  role="tab"
                  data-bs-toggle="tab">
                  Paid
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-2"
                  role="tab"
                  data-bs-toggle="tab">
                  Unpaid
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-3"
                  role="tab"
                  data-bs-toggle="tab">
                  Waiting List
                </a>
              </li>
            </ul>
            <h3 className="sub-heading">Final List will be published later</h3>
            <div
              className="tab-content row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}>
              <div
                role="tabpanel"
                className="col-lg-9 tab-pane fade show active"
                id="day-1">
                {profiles.map((profile) => {
                  return <PlayerCard key={profile.id} profile={profile} />;
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
