import React from "react";

export const MatchDay2 = () => {
  return (
    <div
      role="tabpanel"
      className="col-lg-9 tab-pane fade show active"
      id="day-1">
      <div className="row schedule-item">
        <div className="col-md-2">
          <time>02:00 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 3: A1 vs. B3</h4>
          <p>match</p>
        </div>
        <div className="col-md-2">
          <time>02:45 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 3: A2 vs. B4</h4>
          <p>match</p>
        </div>
      </div>

      <div className="row schedule-item">
        <div className="col-md-2">
          <time>03:30 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 3: A3 vs. B1</h4>
          <p>match</p>
        </div>
        <div className="col-md-2">
          <time>04:15 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 3: A4 vs. B2</h4>
          <p>match</p>
        </div>
      </div>
      <div className="row schedule-item">
        <div className="col-md-2">
          <time>05:00 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 4: A1 vs. B4</h4>
          <p>match</p>
        </div>
        <div className="col-md-2">
          <time>05:45 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 4: A2 vs. B1</h4>
          <p>match</p>
        </div>
      </div>
      <div className="row schedule-item">
        <div className="col-md-2">
          <time>06:30 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 4: A3 vs. B2</h4>
          <p>match</p>
        </div>
        <div className="col-md-2">
          <time>07:15 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Matchday 4: A4 vs. B3</h4>
          <p>match</p>
        </div>
      </div>
      <div className="row schedule-item"></div>
      <div className="row schedule-item">
        <div className="col-md-2">
          <time>08:30 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Semi Final 1: T1 vs. T3</h4>
          <p>match</p>
        </div>
        <div className="col-md-2">
          <time>09:15 PM</time>
        </div>
        <div className="col-md-4">
          <h4>Semi Final 2: T2 vs. T4</h4>
          <p>match</p>
        </div>
      </div>
      <div className="row schedule-item"></div>
      <div className="row schedule-item">
        <div className="col-md-2">
          <time>10:00 PM</time>
        </div>
        <div className="col-md-2">
          <h4>Final:</h4>
        </div>
        <div className="col-md-3">
          <h4>SFW1</h4>
        </div>
        <div className="col-md-2">
          <time>vs</time>
        </div>
        <div className="col-md-3">
          <h4>SFW2</h4>
        </div>
        <p className="text-center">match</p>
      </div>
    </div>
  );
};
