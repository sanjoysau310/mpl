import React, { useEffect, useState } from "react";
import { Loading } from "../../../../../layouts/loading";
import { ImageModal } from "../../../../../../utils/modals/imageModal";
import { useFirebase } from "../../../../../../hooks/firebase/useFirebase";
import { Image } from "react-bootstrap";

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
        <Image
          src={url}
          alt="User"
          //className="img-fluid"
          onClick={() => setModalShow(true)}
          rounded
        />
      ) : (
        <Loading />
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
