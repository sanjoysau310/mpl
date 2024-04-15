import React from "react";

export const PlayerOverView = () => {
  return (
    <table className="table table-profile">
      <thead>
        <tr>
          <th colSpan={2}>Role and Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="field">Role</td>
          <td className="value">
            <div className="m-b-5">
              <b>All Rounder</b>
            </div>
            <div>
              <span className="text-muted">Left Hand Batsman</span>
              <br />
              <span className="text-muted">Right Hand Bowler</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="field">Team</td>
          <td className="value">
            <div className="m-b-5">
              <b>Previous Team</b>-<span className="text-muted">NA</span>
            </div>
            <div>
              <b>Current Team</b>-<span className="text-muted">NA</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="field">Status</td>
          <td className="value">
            <div className="m-b-5">
              <b>Base Price</b>-<span className="text-muted">0</span>
            </div>
            <div>
              <b>Sold Price</b>-<span className="text-muted">0</span>
            </div>
            <div>
              <span className="text-muted">Unsold/Sold</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
