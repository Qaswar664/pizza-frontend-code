import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Pizza = ({ pizza }) => {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);
  console.log(variant, "variant");
  console.log(quantity, "quantity");
  return (
    <Card style={{ width: "18rem" }} className="shadow m-5 p-1">
      <Card.Img variant="top" src={pizza.image} />
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
  );
};

export default Pizza;
