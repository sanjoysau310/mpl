import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ImageModal = (props) => {
  const { heading, url, onHide } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {heading}
          {/* <Link className="text-decoration-none" to={url} download="mpl-2k24">
            <FontAwesomeIcon icon={faDownload} />
          </Link> */}
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
