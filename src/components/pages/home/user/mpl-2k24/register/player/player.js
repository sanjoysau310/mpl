import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../../context/firebase";

export const Player = () => {
  let params = useParams();
  const firebase = useFirebase();
  const [player, setPlayer] = useState({
    played: "",
    pastTeam: "",
    basePrice: "",
  });
  const [disabledBtn, setDisabledBtn] = useState(true);
  useEffect(() => {
    btnDisabled();
  });
  const btnDisabled = () => {
    if (player.played === "No" && player.basePrice != "") {
      setDisabledBtn(false);
    }
    if (
      player.played === "Yes" &&
      player.pastTeam === "" &&
      player.basePrice != ""
    ) {
      setDisabledBtn(true);
    }
    if (
      player.played === "Yes" &&
      player.pastTeam != "" &&
      player.basePrice != ""
    ) {
      setDisabledBtn(false);
    }
  };

  const handleChange = (e) => {
    console.log(player);
    if (e.target.name === "player" && e.target.value === "No")
      setPlayer({ ...player, pastTeam: "" });
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };
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
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.updatePlayerToStore(params.id, player).then((res) => {
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
      {player.played === "Yes" && (
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
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Base Price</Form.Label>
        <Form.Control
          placeholder="Enter base price"
          name="basePrice"
          onChange={handleChange}
          value={player.basePrice}
        />
      </Form.Group>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label={"I accept the " + "T&C*"} />
      </Form.Group> */}

      <Button variant="primary" type="submit" disabled={disabledBtn}>
        Register Now
      </Button>
    </Form>
  );
};
