import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';


const Pizza = ({ pizza }) => {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: "18rem" }} className="shadow m-5 p-1">
      <Card.Img variant="top" src={pizza.image} onClick={handleShow} style={{cursor:'pointer'}}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6>Variant</h6>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                {pizza.varients.map((variant) => {
                  return <option>{variant}</option>;
                })}
              </select>
            </Col>
            <Col md={6}>
              <h6>Quantity</h6>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10).keys()].map((value, index) => {
                  return <option>{index + 1}</option>;
                })}
              </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6}>
            
            <Button type="button" className="btn btn-light btn-outline-success">
              
              Price:{pizza.prices[0][variant] * quantity}
            </Button>
          </Col>

          <Col md={6}>
            <Button type="button" className="btn btn-light btn-outline-success">
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    {/* // details sidbar  */}
    
    <Offcanvas  show={show} onHide={handleClose} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>{pizza.name}</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <div className="border p-3">
      <Card.Img variant="top" src={pizza.image}/>
      </div>
      <div className="border p-3">
        {pizza.description}
      </div>
    </Offcanvas.Body>
  </Offcanvas>
  </>
  );
};

export default Pizza;
