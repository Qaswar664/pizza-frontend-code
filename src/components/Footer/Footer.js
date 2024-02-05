import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row className='p-5'>
          {/* Company Information */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Company</h5>
            <p>About Us</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
          </Col>

          {/* Contact Details */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main St, Cityville</p>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div className=" text-center py-2">
        <Container>
          <p className="m-0">&copy; 2024 Company. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
