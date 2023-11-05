import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

import './header.css';

const Header = () => {
  const navigate = useNavigate()
  
  function login(){
    navigate("/")
  }
  function register(){
    navigate("/register")
  }
  function cart(){
    navigate("/cart")
  }
  function home(){
    navigate("/dashboard")
  }
  return (
    <Nav className="header border shadow">
      <Nav.Item>
      </Nav.Item>
      <Nav.Item className="d-none d-md-block">
        <Nav.Link className="text-dark fw-bold" onClick={home}>
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="d-none d-md-block">
        <Nav.Link className="text-dark fw-bold" onClick={login}>
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="d-none d-md-block">
        <Nav.Link className="text-dark fw-bold " onClick={register}>
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark fw-bold" onClick={cart}>
          Cart
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
