import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../../context/firebase";

export const Owner = () => {
  let params = useParams();
  const firebase = useFirebase();
  const [teamsInfo, setTeamsInfo] = useState({
    teams: [],
    response: [],
  });
  const [owner, setOwner] = useState({
    played: "",
    pastTeam: "",
    interestTeams: "",
    maxBidAmount: "",
    paymentMode: "",
    upiID: "",
  });

  const teamNames = [
    "",
    "Team A",
    "Team B",
    "Team C",
    "Team D",
    "Team E",
    "Team F",
    "Team G",
    "Team H",
  ];
  const [disabledBtn, setDisabledBtn] = useState(true);
  useEffect(() => {
    btnDisabled();
    console.log(owner);
  });
  const btnDisabled = () => {
    if (
      owner.played === "No" &&
      owner.maxBidAmount != "" &&
      owner.interestTeams != ""
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
    if (
      owner.played === "Yes" &&
      owner.pastTeam === "" &&
      owner.maxBidAmount != ""
    ) {
      setDisabledBtn(true);
    }
    if (
      owner.played === "Yes" &&
      owner.pastTeam != "" &&
      owner.maxBidAmount != ""
    ) {
      setDisabledBtn(false);
    }
  };

  const handleChange = (e) => {
    // Destructuring
    const { name, value, checked } = e.target;
    const { teams } = teamsInfo;

    //console.log(`${value} is ${checked}`);
    if (name === "interestTeams") {
      // Case 1 : The user checks the box
      if (checked) {
        setTeamsInfo({
          teams: [...teams, value],
          response: [...teams, value],
        });
      }

      // Case 2  : The user unchecks the box
      else {
        setTeamsInfo({
          teams: teams.filter((e) => e !== value),
          response: teams.filter((e) => e !== value),
        });
      }
      setOwner({ ...owner, interestTeams: teamsInfo });
      //setOwner({ ...owner, interestTeams: teamsInfo });
    } else if (name != "interestTeams")
      setOwner({ ...owner, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.updateOwnerToStore(params.id, owner).then((res) => {
      console.log(res);
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGridEmail" className="mb-3">
        <Row>
          <Form.Label>Previouly Played MPL</Form.Label>
        </Row>
        <Form.Check
          inline
          label="Yes"
          name="played"
          type="radio"
          value="Yes"
          onChange={handleChange}
          id="inline-radio-Left"
        />
        <Form.Check
          inline
          label="No"
          name="played"
          type="radio"
          value="No"
          onChange={handleChange}
          id="inline-radio-Right"
        />
      </Form.Group>

      {owner.played === "Yes" && (
        <Form.Group controlId="formGridPassword" className="mb-3">
          <Form.Label>Previous Team Name</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="pastTeam"
            onChange={handleChange}>
            {teamNames.map((teamName) => {
              return (
                <option key={teamName} value={teamName}>
                  {teamName != "" ? teamName : "Select past team"}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Row>
          <Form.Label>Interest in teams</Form.Label>
        </Row>
        {teamNames.map((teamName) => {
          return (
            teamName != "" && (
              <Form.Check
                key={teamName}
                inline
                label={teamName}
                name="interestTeams"
                type="checkbox"
                value={teamName}
                onChange={handleChange}
              />
            )
          );
        })}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Max Bidding Amount</Form.Label>
        <Form.Control
          placeholder="Enter maximun bidding Amount"
          name="maxBidAmount"
          value={owner.maxBidAmount}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGridPassword" className="mb-3">
        <Form.Label>Payment Mode</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="paymentMode"
          onChange={handleChange}>
          <option value="">Select Payment Mode</option>
          <option value="upi">UPI</option>
          <option value="cash">Cash</option>
        </Form.Select>
      </Form.Group>
      {owner.paymentMode === "upi" && (
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>UPI ID</Form.Label>
          <Form.Control
            placeholder="Enter UPI ID"
            name="upiID"
            onChange={handleChange}
            value={owner.upi}
          />
        </Form.Group>
      )}

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label={"I accept the " + "T&C*"} />
      </Form.Group> */}

      <Button variant="primary" type="submit" disabled={disabledBtn}>
        Register Now
      </Button>
    </Form>
  );
};
