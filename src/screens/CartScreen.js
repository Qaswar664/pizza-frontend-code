import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector ,useDispatch} from "react-redux";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { addToCart } from "../actions/cartAction";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  console.log(cartItems,'cartitemssssssssssss');

  const dispatch = useDispatch()

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
                            <FaMinusCircle className="text-danger pr-3 cursor-pointer"
                            onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.variant))}}
                            />
                            {item.quantity}
                            &nbsp;
                            <FaPlusCircle className="text-success cursor-pointer"
                            
                            onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.variant))}}

                            />
                          </p>

                          <p>Price: ${item.price.toFixed(2)}</p>
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
          <h1>Payment Info</h1>
          {/* Add payment information components here */}
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
