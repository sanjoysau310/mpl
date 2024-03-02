import React from "react";
import { GeneralRules } from "./generalRules";
import { MatchFormat } from "./matchFormat";
import { BowlingRules } from "./bowlingRules";
import { MatchTiming } from "./matchTiming";
import { Awards } from "./awards";
import { Accordion } from "react-bootstrap";

export const Events = () => {
  return (
    <>
      <section id="speakers" className="mt-5">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Event Rules</h2>
            <p>Here are some of our rules</p>
          </div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>General Rules</h5>
              </Accordion.Header>
              <Accordion.Body>
                <GeneralRules />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>Match Format</h5>
              </Accordion.Header>
              <Accordion.Body>
                <MatchFormat />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5>Bowling Quota and Rules</h5>
              </Accordion.Header>
              <Accordion.Body>
                <BowlingRules />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h5>Match timings and Punctuality</h5>
              </Accordion.Header>
              <Accordion.Body>
                <MatchTiming />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h5>Prizes/Awards</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Awards />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
          <h5 className="mt-5 text-center">
            <strong>
              Musketeers Club would like to see players respect the rules and
              participate in true spirit of the game of cricket.
            </strong>
          </h5>
        </div>
      </section>
    </>
  );
};
