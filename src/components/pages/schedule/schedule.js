import React, { useState } from "react";
import "./schedule.css";
import { MatchDay1 } from "./matchDay1";
import { MatchDay2 } from "./matchDay2";
import { PointsTable } from "./pointstable";
import { PointsTableMobile } from "./pointstable-mobile";
export const Schedule = () => {
  const [matchDay, setMatchDay] = useState(1);
  let pageContent;

  switch (matchDay) {
    case 1:
      pageContent = <MatchDay1 />;
      break;
    case 2:
      pageContent = <MatchDay2 />;
      break;
    case 3:
      pageContent = <PointsTableMobile />;
      break;
    case 4:
      pageContent = <PointsTable />;
      break;
    default:
      pageContent = <MatchDay1 />;
  }

  return (
    <section id="schedule" className="section-with-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Event Schedule</h2>
          <p>Here is our event schedule</p>
        </div>
        <ul
          className="tabs justify-content-center"
          role="tablist"
          data-aos="fade-up"
          data-aos-delay={100}>
          <li className="nav-item">
            <a
              className={`tab${matchDay === 1 && " active"}`}
              href="#day-1"
              role="tab"
              data-bs-toggle="tab"
              onClick={() => setMatchDay(1)}>
              Day 1
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`tab${matchDay === 2 && " active"}`}
              href="#day-2"
              role="tab"
              data-bs-toggle="tab"
              onClick={() => setMatchDay(2)}>
              Day 2
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`tab${matchDay === 3 && " active"}`}
              href="#day-3"
              role="tab"
              data-bs-toggle="tab"
              onClick={() => setMatchDay(3)}>
              Points Table
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`tab${matchDay === 4 && " active"}`}
              href="#day-3"
              role="tab"
              data-bs-toggle="tab"
              onClick={() => setMatchDay(4)}>
              Stats
            </a>
          </li>
        </ul>
        {/* <h3 className="sub-heading">
          <p>Group A: Team A1 Team A2 Team A3 Team A4</p>
          <p>Group B: Team B1 Team B2 Team B3 Team B4</p>
        </h3> */}
        <div
          className="tab-content row justify-content-center"
          data-aos="fade-up"
          data-aos-delay={200}>
          <div
            role="tabpanel"
            className="col-lg-9 tab-pane fade show active justify-content-center">
            {pageContent}
          </div>
        </div>
      </div>
    </section>
  );
};
