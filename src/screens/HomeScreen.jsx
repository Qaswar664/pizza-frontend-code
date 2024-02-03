import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaAction";
import Filters from "../admin/Filters";
import "./style.css";
import discountimg from "../assets/discountimg.png";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzadata = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzadata;
  console.log(pizzas, "pizzassssssssssss");

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <div className="hero-img">
        <img
          src="https://img.freepik.com/free-photo/steamy-slice-pizza-with-stringy-cheese-fresh-toppings-is-lifted-high_91128-4669.jpg?w=900&t=st=1706979174~exp=1706979774~hmac=5e02776340f7291bade95d9e807f47916fe9ee1c29f45b196d1c368f92a9c130"
          alt=""
        />
        <div className="hero-text">
          <h1>UP TO 50% OFF</h1>
          <h1>BIG DEAL</h1>
        </div>
      </div>
      <Container className="container-fluid">
        <div>
          <Row>
            <Col  md={4} lg={4} xl={4}>
              <img src={card1} alt="" />
            </Col>
            <Col md={4} lg={4} xl={4}>
              <img src={card2} alt="" />
            </Col>
            <Col md={4} lg={4} xl={4}>
              <img src={card3} alt="" />
            </Col>
          </Row>
        </div>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error while fetching data</h1>
        ) : (
          <Row>
            
           <div className="top-selling">
            <h4>Top Selling Deals</h4>
            <p>Shop More</p>
           </div>
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza._id}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
