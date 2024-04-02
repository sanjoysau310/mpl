import React from "react";
import { Table } from "react-bootstrap";

export const PointsTableMobile = () => {
  const columns = ["TEAM", "P", "W", "L", "T", "NR", "NRR", "PTS"];
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
      won: 2,
      lost: 0,
      tied: 1,
      nr: 0,
      nrr: +0.16,
      pts: 5,
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
    {
      id: 5,
      team: "Team 5",
      played: 4,
      won: 2,
      lost: 2,
      tied: 0,
      nr: 0,
      nrr: +0.32,
      pts: 4,
    },
  ];
  results.sort((a, b) => {
    if (a.pts !== b.pts) {
      return b.pts - a.pts;
    }
    return b.nrr - a.nrr;
  });

  return (
    <Table responsive striped>
      <thead>
        <tr>
          {Array.from({ length: columns.length }).map((_, index) => (
            <th key={index}>{columns[index]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={result.id}>
            <td>
              {index + 1}&nbsp;-&nbsp;{result.team}
            </td>
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
  );
};
