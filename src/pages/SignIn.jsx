import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import SILModal from "../components/SILModal";
import ForgotPassword from "./ForgotPassword";
import ResetPasswordCode from "./ResetPasswordCode";

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const handleOpenModal = () => {
    console.log("hey");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenCodeModal = () => {
    setShowModal(false); // Close the forgot password modal
    setShowCodeModal(true); // Open the code modal
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>

                <div className="text-center mt-3">
                  <a className="silLink" onClick={() => handleOpenModal()}>
                    Forgot password?
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      <SILModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        modalTitle="Forgot password"
        component={<ForgotPassword handleOpenCodeModal={handleOpenCodeModal} />}
      />

      <SILModal
        showModal={showCodeModal}
        handleCloseModal={() => setShowCodeModal(false)}
        modalTitle="Reset password"
        component={<ResetPasswordCode />}
      />
    </Container>
  );
};

export default SignIn;
