import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { pizzaFilter } from '../actions/pizzaAction';


function Filters() {
  const dispatch = useDispatch();

  const [searchPizza, setSearchPizza] = useState(''); // State for the search input
  const [category, setCategory] = useState('All'); // State for the category dropdown

  const handleSearch = () => {
    // Handle search logic here (you can pass searchPizza and category to your parent component or perform other actions)
    console.log('Search Pizza:', searchPizza);
    console.log('Selected Category:', category);
  };

  return (
    <Form>
      <Row>
        <Col xs={6} sm={6} md={8} lg={8} className="custom-col">
          <Form.Control
            placeholder="Search Pizza"
            value={searchPizza}
            onChange={(e) => setSearchPizza(e.target.value)}
            className="custom-input"
          />
        </Col>
        {/* <Col xs={12} sm={6} md={4} lg={4} className="custom-col">
          <Form.Select
            style={{ width: "100%", textAlign: "start" }}
            aria-label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="custom-input"
          >
            <option >All</option>
            <option >Vegetable</option>
            <option >Non-Vegetable</option>
          </Form.Select>
        </Col> */}
        <Col xs={6} sm={6} md={4} lg={4} className="custom-col">
          <Button variant="primary" onClick={()=>{dispatch(pizzaFilter(searchPizza,category))}} className="custom-input">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Filters;
