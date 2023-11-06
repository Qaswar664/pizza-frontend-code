import React from "react";
import allpizza from "../pizza-data";
import { Col, Container, Row } from "react-bootstrap";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {allpizza.map((pizza) => {
            return (
              <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
