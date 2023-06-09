import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { createUser } from "../reducx/slices/SignUpSlice";
import { useSelector, useDispatch } from "react-redux";
import SuggestedUsers from "../components/SuggestedUsers";

const Signup = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.signup);
  const [showAlert, setShowAlert] = useState(false);
  const [referrer, setReferrer] = useState("");
  
  const [formData, setFormData] = useState({
    email: "",
    password: "", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if(user.result == 'OK' && user.resultCode === 200) {
      setShowAlert(true)
      setFormData({
        email: "",
        password: "", 
      })
      setReferrer("");
    }
  }, [user]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createUser(formData));
  };

  const setReferralId = (user) => {
    setFormData((prev) => ({ ...prev, referrer: user.userId }));
    setReferrer(user.email)
    console.log("formData is:", formData);
  };

  return (
    <Container>
      <h3>Registation form</h3>

      {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Registration successful! Kindly check your email inbox for activation.
              </Alert>
            )}

      <Row className="justify-content-left">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <SuggestedUsers  referrer={referrer} setReferralId={setReferralId} />
            
            <Button
              style={{ marginTop: "10px" }}
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
