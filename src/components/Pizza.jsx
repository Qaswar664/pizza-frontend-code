import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
// import './pizza.css'
// import "./pizza.css";
import '../index.css'

const Pizza = ({ pizza }) => {
  const [variant, setVariant] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedVariant = pizza.varients.find(
    (v) => v.toLowerCase() === variant.toLowerCase()
  );
  // const selectedPrice = selectedVariant
  //   ? pizza.prices[pizza.varients.indexOf(selectedVariant)]
  //   : 0;


  const selectedPrice = selectedVariant
  ? pizza.prices[0][selectedVariant.toLowerCase()]
  : 0;

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, selectedPrice, variant));
  };

  return (
    <>
      <Card className="pizza-card shadow mb-5 p-3" >
        <Card.Img style={{maxHeight:"250px",minHeight:"250px",cursor:"pointer",transition: "transform 0.3s"}} onClick={handleShow}
          variant="top"
          src={pizza.image}
          className="card-img zoom-in"
        />
        <Card.Body>
          <Card.Title className="pizza-title pt-2">{pizza.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {pizza.category}
          </Card.Subtitle>

          <Card.Text>
            <Row>
              <Col md={6}>
                <h6 className="variant-label">Variant</h6>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  className="form-select"
                >
                  {pizza.varients.map((variantOption) => (
                    <option key={variantOption} value={variantOption}>
                      {variantOption}
                    </option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6 className="quantity-label">Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="form-select"
                >
                  {[...Array(5).keys()].map((value, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              <Button
                type="button"
                className="btn btn-light btn-outline-success price-btn"
              >
                Price: ${selectedPrice * quantity}
              </Button>
            </Col>
            <Col md={6}>
              <Button
                onClick={addToCartHandler}
                type="button"
                className="btn btn-light btn-outline-success add-to-cart-btn"
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Offcanvas details sidebar */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{pizza.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="border p-3">
            <Card.Img variant="top" src={pizza.image} className="zoom-in" />
          </div>
          <div className="border p-3">
            <strong>Category:</strong> {pizza.category}
          </div>
          <div className="border p-3">
            <strong>Description:</strong> {pizza.description}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Pizza;
