import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../context/firebase";
import { Spinner } from "../../../layouts/spinner";
import { ImageModal } from "../../../../utils/modals/imageModal";

export const UserPOA = ({ poaURL, type }) => {
  const firebase = useFirebase();
  const [url, setURL] = useState("");
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    firebase.getImageURL(poaURL).then((url) => setURL(url));
  }, []);
  return (
    <div className="col-sm-4 col-md-4 col-xl-4">
      {url ? (
        <>
          <img
            src={url}
            alt="User"
            className="img-fluid"
            onClick={() => setModalShow(true)}
          />
        </>
      ) : (
        <Spinner />
      )}

      <ImageModal
        show={modalShow}
        heading="Address & POA"
        url={url}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
