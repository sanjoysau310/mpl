import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";
import { CropImage } from "../../components/pages/home/user/profile/edit/upload/crop/CropImage";

export const UploadPicModal = (props) => {
  console.log(props);
  const { url, onHide } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Upload Pic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CropImage image={props.image} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
