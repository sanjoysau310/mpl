import React from "react";

export const PointsTable = () => {
  return (
    <>
      <div className="row schedule-item">
        <div className="col-md-5">
          <h4>Teams</h4>
        </div>
        <div className="col-md-1">
          <h4>Match</h4>
        </div>
        <div className="col-md-1">
          <h4>Won</h4>
        </div>
        <div className="col-md-1">
          <h4>Lost</h4>
        </div>
        <div className="col-md-1">
          <h4>Tied</h4>
        </div>
        <div className="col-md-1">
          <h4>NR</h4>
        </div>
        <div className="col-md-1">
          <h4>PTS</h4>
        </div>
        <div className="col-md-1">
          <h4>NRR</h4>
        </div>
      </div>
      <div className="row schedule-item">
        <div className="col-md-5">Team 1</div>
        <div className="col-md-1">3</div>
        <div className="col-md-1">1</div>
        <div className="col-md-1">1</div>
        <div className="col-md-1">1</div>
        <div className="col-md-1">0</div>
        <div className="col-md-1">3</div>
        <div className="col-md-1">+0.12</div>
      </div>
      <div className="row schedule-item">
        <div className="col-md-5">Team 2</div>
        <div className="col-md-1">2</div>
        <div className="col-md-1">1</div>
        <div className="col-md-1">1</div>
        <div className="col-md-1">0</div>
        <div className="col-md-1">1</div>
        <div className="col-md-1">3</div>
        <div className="col-md-1">-0.02</div>
      </div>
      <div className="row schedule-item">
        <div className="col-md-5">Team 3</div>
        <div className="col-md-1">3</div>
        <div className="col-md-1">2</div>
        <div className="col-md-1">1</div>
        <div className="col-md-1">0</div>
        <div className="col-md-1">0</div>
        <div className="col-md-1">4</div>
        <div className="col-md-1">+0.76</div>
      </div>
    </>
  );
};
