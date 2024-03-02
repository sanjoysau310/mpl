import React from "react";

export const MatchTiming = () => {
  return (
    <div className="details">
      <p>
        &emsp;First match is slated to start at 02:00 p.m. sharp. It is expected
        of all teams to finish an innings in 20 minutes for all the matches.
        There will be a 5 minutes innings break. All the players should be
        available and ready to take the field as soon as possible.
      </p>
      <ul>
        <li>
          <strong>Penalty for taking the field late: </strong>In case one team
          is not able to take the field due to players arriving late the
          following rule can be used to deduct overs.
          <ul>
            <li>
              If a fielding side must be in a position to bowl the first ball of
              the final over of the innings by the scheduled or rescheduled
              time(18 mins) for the end of the innings. If they are not in such
              a position, one fewer fielder will be permitted outside of the
              circle for the remaining overs of the innings.
            </li>
            <li>
              If the batting team delays in sending the next batsman and for
              wasting time of the opponent team, the batting team will be
              penalized for -10 runs(i.e. if the batting team scored 40 runs in
              8 overs then the fielding team will have to score only 31 in 8
              overs to win).
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Penalty for abusive language or misbehaviour in the ground:
          </strong>
          <ul>
            <li>
              If any player uses abusive language or misbehave with umpires, any
              players or committee member their teams will be penalized for -10
              runs while defending and +10 runs while chasing along with the
              player suspension from the tournament.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
