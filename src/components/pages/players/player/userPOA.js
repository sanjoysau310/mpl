import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../context/firebase";
import { Spinner } from "../../../layouts/spinner";

export const UserPOA = ({ poaURL, fileType }) => {
  const firebase = useFirebase();
  const [url, setURL] = useState("");
  useEffect(() => {
    firebase.getImageURL(poaURL).then((url) => setURL(url));
  }, []);
  return (
    <>
      {console.log(fileType)}
      {url ? (
        fileType.equalsIgnoreCase("pdf") ? (
          <object width="100%" height="400" data={url} type="application/pdf" />
        ) : (
          <img src={url} alt="User" className="img-fluid" />
        )
      ) : (
        <Spinner />
      )}
    </>
  );
};
