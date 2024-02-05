import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteFromCart } from "../actions/cartAction";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + (item.price || 0), 0);

  return (
    <Container className="mt-5">
      <Row >
        <Col className="mt-5" lg={6} xl={6}>
          <h1>Cart Items</h1>
          {cartItems.map((item, index) => (
            <Card key={index} className="mb-3">
              <Row className="g-0">
                <Col md={4} lg={6}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col md={8} lg={6}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <p>Variant: {item.variant}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: RS {item.price}</p>
                      <Button
                        variant="danger"
                        onClick={() => dispatch(deleteFromCart(item))}
                      >
                        <FaTrash /> Delete
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        <Col className="mt-5" lg={6} xl={6}>
          <div className="d-flex flex-column align-items-center">
            <h1>Payment Info</h1>
            <h5>Sub Total</h5>
            <h6>RS {subTotal}/-</h6>
            <Button className="mt-3">Place Order</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
