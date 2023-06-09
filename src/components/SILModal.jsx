import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';

function SILModal({showModal, handleCloseModal, modalTitle, component}) {

    const [viewModal, setViewModal] = useState(showModal);

  const closeModal = () => {
    handleCloseModal(false);
  };

  useEffect(()=> {
    setViewModal(showModal);
  }, [showModal])
  

  return (
    <>
    <Modal show={viewModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {component }
        </Modal.Body>
      </Modal>
      </>
  )
}

export default SILModal