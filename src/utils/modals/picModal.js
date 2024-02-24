import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";

export const UserPicModal = (props) => {
  console.log(props);
  const { url, onHide } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Address & DOB Proof
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={url} alt="User" className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
