import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../context/firebase";
import { Spinner } from "../../../layouts/spinner";

export const UserPicture = ({ imageURL }) => {
  const firebase = useFirebase();
  const [url, setURL] = useState("");
  useEffect(() => {
    firebase.getImageURL(imageURL).then((url) => setURL(url));
  }, []);
  return (
    <>
      {url ? <img src={url} alt="User" className="img-fluid" /> : <Spinner />}
    </>
  );
};
