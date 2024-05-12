import React, { useState } from "react";
import "./register.css";
import { Player } from "./player/player";
import { Owner } from "./owner/owner";
import { Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Register = () => {
  const [value, setValue] = useState("player");

  const profile = useSelector((state) => state.user.profile);
  const { played, basePrice, maxBidAmount } = profile;
  console.log(played);
  return (
    <div className="row">
      {played != "" ? (
        <div className="mt-5 mb-5 p-3 text-center">
          <h5>
            You have already registered as a{" "}
            {(basePrice && "Player") || (maxBidAmount && "Team Owner")}
          </h5>
        </div>
      ) : (
        <>
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
          <div className="row mt-3">
            <div className="col">
              {value === "player" ? <Player /> : <Owner />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
