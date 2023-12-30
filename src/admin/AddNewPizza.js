import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { addPizza } from '../actions/pizzaAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewPizza = () => {
  const dispatch = useDispatch();
  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState('');
  const [mediumPrice, setMediumPrice] = useState('');
  const [largePrice, setLargePrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const pizza = {
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

    dispatch(addPizza(pizza));
  };

  // Show success toast when 'success' changes
  React.useEffect(() => {
    if (success) {
      toast.success('Pizza added successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset the form fields on success
      setName('');
      setSmallPrice('');
      setMediumPrice('');
      setLargePrice('');
      setImage('');
      setDescription('');
      setCategory('');
    }
  }, [success]);

  return (
    <Container>
      <h2 className="text-center mt-4">Add New Pizza</h2>
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
  );
};

export default AddNewPizza;
