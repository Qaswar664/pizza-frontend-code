import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal=cartItems.reduce((x,item)=>x+item.price,0)

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Cart Items</h1>
          <Row className="d-flex flex-column">
            {cartItems.map((item, index) => (
              <Col key={index} md={8}>
                <Card style={{ width: "22rem", margin: "10px" }}>
                  <Card.Body>
                    <Row>
                      <Col md={4}>
                        <Card.Img
                          variant="top"
                          src={item.image}
                          alt={item.name}
                          style={{ height: "100px", objectFit: "cover" }}
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          <p>Variant: {item.variant}</p>
                          <p>
                            Quantity:&nbsp;
                            <Button type="button" className=" btn btn-danger">
                              <FaMinusCircle
                                onClick={() => {
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity - 1,
                                      item.price,
                                      item.variant
                                    )
                                  );
                                }}
                              />
                            </Button>
                            {item.quantity}
                            &nbsp;
                            <Button type="button" className=" btn btn-success">
                              <FaPlusCircle
                                onClick={() => {
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity + 1,
                                      item.price,
                                      item.variant
                                    )
                                  );
                                }}
                              />
                            </Button>
                          </p>

                          <p>Price: RS{item.price.toFixed(2)}</p>
                          <Button>
                            <FaTrash
                            onClick={()=>{
                              dispatch(deleteFromCart(item))
                            }}
                            />
                          </Button>
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={5}>
                    {/* Add payment information components here */}

          <h1>Payment Info</h1>
          <h5>Sub Total</h5>
          <h6>RS {subTotal}/-</h6>
          <Button>Checkout</Button>
        
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
