import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../context/firebase";
import { Spinner } from "../../../layouts/spinner";
import { ImageModal } from "../../../../utils/modals/imageModal";

export const UserPicture = ({ imageURL }) => {
  const firebase = useFirebase();
  const [url, setURL] = useState("");
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    firebase.getImageURL(imageURL).then((url) => setURL(url));
  }, []);
  return (
    <>
      {url ? (
        <img
          src={url}
          alt="User"
          className="img-fluid"
          onClick={() => setModalShow(true)}
        />
      ) : (
        <Spinner />
      )}
      <ImageModal
        show={modalShow}
        heading="Profile Picture"
        url={url}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
