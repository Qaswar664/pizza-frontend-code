import React, { useState,useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from '../actions/userAction';

const Login = () => {
  const despatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
   if(localStorage.getItem('currentUser')){
    window.location.href="/"
   }
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    despatch(loginUser(formData))
    // Add your login logic here, such as calling an API to authenticate the user
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mt-4">Login</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
