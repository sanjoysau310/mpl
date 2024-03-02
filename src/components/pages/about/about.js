import React, { useState } from "react";
import "./about.css";
import { Button, Collapse } from "react-bootstrap";
export const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="about">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-6">
            <h2>About The Event</h2>
            <p>Musketeers Premier League</p>
          </div>
          <div className="col-lg-3">
            <h3>Where</h3>
            <p>Katjunagar Play Ground</p>
          </div>
          <div className="col-lg-3">
            <h3>When</h3>
            <p>
              Saturday to Sunday
              <br />
              20-21 April, 2024
            </p>
          </div>
        </div>
        <div>
          <p>
            Before starting we all need to know some rules, Jiski Bat, Uski
            First Batting. Deewar ke uss taraf gaya toh out. Khadoos uncle ke
            ghar mein ball gayi toh out. Joh gutter mein shot marga woh ball
            layega. This all started from a gully in a small locality of India,
            Katjunagar where some kids started playing cricket in the streets of
            their locality. They often had to change their destinations in that
            small locality as there was always someone who used to say "NIJER
            BARIR SHAMNE GIYE KHEL".
            {!open && (
              <i className="see-more-less" onClick={() => setOpen(!open)}>
                {" "}
                ...See More
              </i>
            )}
            <Collapse in={open}>
              <div id="example-collapse-text">
                The best moment for anyone who has played gully cricket was
                breaking someone's window glass while trying to hit a six and
                then running from there. Each and everyone used to run in
                different directions someone with a bat and someone with the
                ball. We all grew up from kids to teens and decided to organize
                a tournament just like 'IPL' in our gully and it was named RCL
                (Rising star cricket league) and from that day our journey
                started. As we grew up it wasn't possible for us to conduct that
                tournament in the gully because of those 'khadoos uncles'. Hence
                we shifted the tournament from the gully to Katjunagar
                playground where we ourselves made a pitch and organized this
                tournament, at first there were only 5 teams with 4 players, and
                nowadays there is always an overflow of players. last year we
                organized this tournament with 10 teams having 11 players each.
                Last year we also created our club named "MUSKETEERS CLUB" for
                organizing different sports events. And those kids who started
                the tournament are now the organizers of this huge tournament.
                {open && (
                  <i className="see-more-less" onClick={() => setOpen(!open)}>
                    ...See Less
                  </i>
                )}
              </div>
            </Collapse>
          </p>
        </div>
      </div>
    </section>
  );
};
