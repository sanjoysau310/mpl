import React from "react";

export const BowlingRules = () => {
  return (
    <div className="speaker" data-aos="fade-up" data-aos-delay={100}>
      <div className="details">
        <p>
          &emsp;There will be a box at the non-striking end. Bowlers will have
          to bowl standing inside the box but touching the line of any side will
          be called as a NO ball. Only inside that box bowler can take a step
          but after delivering the bowl bowler cannot cross the line if the
          bowler does so that will be considered as NO ball. There will be speed
          limitations for all bowlers. Any bouncer will be considered as a no
          ball.
        </p>
        <ul>
          <li>
            All the league matches will be played in 6 overs.
            <ul>
              <li>Only 2 Bowlers can bowl a maximum of 2 overs per match.</li>
              <li>
                First 2 overs will be powerplay. Only 2 players can field
                outside the circle.
              </li>
              <li>
                For the rest of the overs only 5 players can field outside the
                circle.
              </li>
            </ul>
          </li>
          <li>
            All the Knockout matches will be played in 8 overs.
            <ul>
              <li>All Bowlers can bowl a maximum of 2 overs per match.</li>
              <li>
                First 3 overs will be powerplay. Only 2 players can field
                outside the circle.
              </li>
              <li>
                For the rest of the overs only 5 players can field outside the
                circle.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          &emsp;There will be <danger>BOUNDARY OUT IN ANY NO BALL</danger> but
          for any kind of no ball there will be free hit (Note:-Bowled out,
          Catch out, Stamp out will not be given. But run out will be given and
          for hitting a 6 there will be no run and no out). Matches will be
          played only 4s, 3s, 2s and 1s. 6s are not allowed in any delivery
          other than free-hit (but no run will be given).
        </p>
      </div>
    </div>
  );
};
