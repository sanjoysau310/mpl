import React from "react";

export const MatchFormat = () => {
  return (
    <div className="details">
      <p>
        &emsp;There are 8 teams divided into 2 groups. Each group consists of 4
        teams. Each team will play against 4 teams from other group. Knock out
        matches will be followed as per result of the league session.
      </p>
      <ul>
        <li>
          <strong>Semi final 1:</strong> 1st ranked team vs 3rd ranked team
        </li>
        <li>
          <strong>Semi final 2:</strong> 2nd ranked team vs 4th ranked team
        </li>
        <li>
          <strong>Final:</strong> Semi final 1 winner vs Semi final 2 winner
        </li>
      </ul>
    </div>
  );
};
