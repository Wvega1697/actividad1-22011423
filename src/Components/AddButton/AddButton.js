import { Button, Modal } from "react-bootstrap";
import "./AddButton.scss";
import ItemForm from "../ItemForm/ItemForm";
import { useState } from "react";
import { useSelector } from "react-redux";

function AddButton() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const type = useSelector((state) => state.type.value);
  const addText = type === 0 ? "Add Task" : "Add Goal";

  return (
    <>
      <Button
        variant="outline-info"
        className="mobile-button"
        onClick={handleShowModal}
      >
        {addText}
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{addText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddButton;
