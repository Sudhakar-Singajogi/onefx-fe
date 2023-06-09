import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../reducx/slices/SignUpSlice";

function ForgotPassword({handleOpenCodeModal}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.signup);
  const [forgotEmail, setForgotEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState('');

  const handleForgotPwd = () => {
    console.log("forgotEmail:", forgotEmail);
    dispatch(forgotPassword({ email: forgotEmail }));    
  };
  
  useEffect(() => {
    console.log('hey')
    if(user.result == 'OK' && user.resultCode === 200) {
      setShowAlert(false)
      handleOpenCodeModal()
    } else {
      if(user.error) { 
        setShowAlert(true)
        setAlertMsg(user.error.replace('"email" is not allowed to be empty', "Email address is required"))
      }
    }
  }, [user]);

  return (
    <>
      <Form>
        {
          showAlert && <Alert variant="danger"> {alertMsg} </Alert>
        }
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setForgotEmail(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid">
          <Button
            variant="primary"
            type="button"
            onClick={() => handleForgotPwd()}
          >
            Login
          </Button>
          
        </div>
      </Form>
    </>
  );
}

export default ForgotPassword;
