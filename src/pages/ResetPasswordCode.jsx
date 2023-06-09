import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function ResetPasswordCode() {
  const [alertVariant, setAlertVariant] = useState('success')
  const [alertMsg, setAlertMsg] = useState('Reset Password code send to your register email.')

  
  return (
    <>
      <Form>
        <Alert variant={alertVariant}> {alertMsg} </Alert>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="text" placeholder="Enter code" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="password" placeholder="Enter confirm password" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="button">
            Reset Password
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ResetPasswordCode;
