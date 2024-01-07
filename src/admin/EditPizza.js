import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

import { getPizzaById, updatePizza } from "../actions/pizzaAction";

const EditPizza = () => {
  const dispatch = useDispatch();
  const { pizzaId } = useParams();
  const getPizzaByIdState = useSelector((state) => state.getPizzaByIdReducer);
  const updatePizzaState = useSelector((state)=>state.updatePizzaByIdReducer)
  const {updateloading,updatesuccess,updateerror}=updatePizzaState
  const { loading, error, pizza } = getPizzaByIdState;

  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getPizzaById(pizzaId));
  }, [dispatch, pizzaId]);

  useEffect(() => {
    if (pizza) {
      setName(pizza.name || "");
      setSmallPrice(pizza.prices[0]['small'] || "");
      setMediumPrice(pizza.prices[0]['medium'] || "");
      setLargePrice(pizza.prices[0]['large']|| "");
      setImage(pizza.image || "");
      setDescription(pizza.description || "");
      setCategory(pizza.category || "");
    }
  }, [pizza]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id:pizzaId,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(updatePizza(updatedPizza))
    // Handle form submission, e.g., dispatch an action to update the pizza
  };

  return (
    <div>
      {updateloading && <Spinner/> ? (
        "Loading..."
      ) : (
        // <form onSubmit={handleSubmit}>
        //   <label>Name:</label>
        //   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          
        //   <label>Small Price:</label>
        //   <input type="text" value={smallPrice} onChange={(e) => setSmallPrice(e.target.value)} />

        //   <label>Medium Price:</label>
        //   <input type="text" value={mediumPrice} onChange={(e) => setMediumPrice(e.target.value)} />

        //   <label>Large Price:</label>
        //   <input type="text" value={largePrice} onChange={(e) => setLargePrice(e.target.value)} />

        //   <label>Image URL:</label>
        //   <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

        //   <label>Description:</label>
        //   <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        //   <label>Category:</label>
        //   <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

        //   <button type="submit">Submit</button>
        // </form>
        <Container>
      <h2 className="text-center mt-4">Edit Pizza</h2>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}

        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pizza name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formSmallPrice">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter small pizza price"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formMediumPrice">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter medium pizza price"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formLargePrice">
              <Form.Label>Large Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter large pizza price"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter pizza description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pizza category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
          {loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              {' Loading...'}
            </>
          ) : (
            'Add Pizza'
          )}
        </Button>
      </Form>
    </Container>
      )}
    </div>
  );
};

export default EditPizza;
