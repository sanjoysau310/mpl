import React, { useState } from "react";
import "./register.css";
import { Player } from "./player/player";
import { Owner } from "./owner/owner";
import { Button, ButtonGroup } from "react-bootstrap";
export const Register = () => {
  const [value, setValue] = useState("player");
  return (
    <div className="row p-5">
      <div className="row text-center">
        <ButtonGroup size="lg" className="mb-2">
          <Button
            type="submit"
            onClick={() => setValue("player")}
            className={
              "border" + (value != "player" && " bg-transparent text-dark")
            }>
            Player
          </Button>
          <Button
            type="submit"
            onClick={() => setValue("owner")}
            className={
              "border" + (value != "owner" && " bg-transparent text-dark")
            }>
            Owner
          </Button>
        </ButtonGroup>
      </div>
      <div className="row mt-5">
        <div className="col">{value === "player" ? <Player /> : <Owner />}</div>
      </div>
    </div>
  );
};
