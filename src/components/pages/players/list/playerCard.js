import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../context/firebase";
import { Link } from "react-router-dom";
import pp from "../../../../assets/images/home/pp.png";

export const PlayerCard = ({ profile }) => {
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
        <h4>
          {name} <span>Brenden Legros</span>
        </h4>
        <p>Facere provident incidunt quos voluptas.</p>
      </div>
      <div className="col-md-2">
        <Link to={`/playerHome/${profile.id}`}>
          <button className="btn btn-secondary">View</button>
        </Link>
      </div>
    </div>
  );
};
