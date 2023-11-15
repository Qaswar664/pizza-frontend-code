import React, { useEffect } from "react";
import allpizza from "../pizza-data";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzadata = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzadata;
  console.log(pizzas,'pizzassssssssssss');

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error whiel fetching data</h1>
        ) : 
          <Row>
            {pizzas.map((pizza) => {
              return (
                <Col md={4}>
                  <Pizza pizza={pizza} />
                </Col>
              );
            })}
          </Row>
        }
      </Container>
    </>
  );
};

export default HomeScreen;
