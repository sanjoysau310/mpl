import React from "react";
import { Table } from "react-bootstrap";

export const PointsTableMobile = () => {
  const columns = ["POS", "TEAM", "P", "W", "L", "T", "NR", "NRR", "PTS"];
  const results = [
    {
      id: 1,
      team: "Team 1",
      played: 3,
      won: 2,
      lost: 1,
      tied: 0,
      nr: 0,
      nrr: +0.12,
      pts: 4,
    },
    {
      id: 2,
      team: "Team 2",
      played: 3,
      won: 1,
      lost: 1,
      tied: 1,
      nr: 0,
      nrr: +0.02,
      pts: 3,
    },
    {
      id: 3,
      team: "Team 3",
      played: 3,
      won: 1,
      lost: 1,
      tied: 0,
      nr: 1,
      nrr: +0.06,
      pts: 3,
    },
    {
      id: 4,
      team: "Team 4",
      played: 3,
      won: 1,
      lost: 2,
      tied: 0,
      nr: 0,
      nrr: -0.32,
      pts: 2,
    },
  ];
  return (
    <div
      role="tabpanel"
      className="col-lg-9 tab-pane fade show active"
      id="day-1">
      <Table responsive>
        <thead>
          <tr>
            {Array.from({ length: columns.length }).map((_, index) => (
              <th key={index}>{columns[index]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.team}</td>
              <td>{result.played}</td>
              <td>{result.won}</td>
              <td>{result.lost}</td>
              <td>{result.tied}</td>
              <td>{result.nr}</td>
              <td>{result.nrr}</td>
              <td>{result.pts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
