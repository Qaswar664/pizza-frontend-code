import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch} from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ pizza }) => {
  const [variant, setVariant] = useState("Small"); // Ensure the default variant matches the case in pizza.varients
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()

 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedVariant = pizza.varients.find(v => v.toLowerCase() === variant.toLowerCase());
  const selectedPrice = selectedVariant ? pizza.prices[pizza.varients.indexOf(selectedVariant)] : 0;

  const addToCartHandler=()=>{
    dispatch(addToCart(pizza,quantity,selectedPrice,variant))
  }

  return (
    <>
      <Card style={{ width: "18rem" }} className="shadow m-5 p-1">
        <Card.Img variant="top" src={pizza.image} onClick={handleShow} style={{ cursor: 'pointer',height:'250px' }} />
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
                  {pizza.varients.map((variantOption) => (
                    <option key={variantOption} value={variantOption}>
                      {variantOption}
                    </option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((value, index) => (
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
              <Button type="button" className="btn btn-light btn-outline-success">
                Price:{selectedPrice * quantity}
              </Button>
            </Col>
            <Col md={6}>
              <Button onClick={addToCartHandler} type="button" className="btn btn-light btn-outline-success">
                Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* // details sidebar  */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{pizza.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="border p-3">
            <Card.Img variant="top" src={pizza.image} />
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
