import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pp from "../../../../../assets/images/home/pp.png";
import { useFirebase } from "../../../../../hooks/firebase/useFirebase";

export const UserCard = ({ profile }) => {
  //console.log(user.id);
  const { uid, name, imageURL } = profile.data();
  const firebase = useFirebase();
  const [url, setURL] = useState("");
  useEffect(() => {
    imageURL !== "" &&
      firebase.getImageURL(imageURL).then((url) => setURL(url));
  }, []);
  return (
    <div className="row schedule-item">
      <div className="col-md-2">
        <div className="speaker">
          <img src={imageURL !== "" ? url : pp} alt="User" />
        </div>
      </div>
      <div className="col-md-8">
        <h4>{name}</h4>
        <p>All Rounder</p>
      </div>
      <div className="col-md-2">
        <Link to={`/userHome/${profile.id}`}>
          <button className="btn btn-secondary">View</button>
        </Link>
      </div>
    </div>
  );
};
