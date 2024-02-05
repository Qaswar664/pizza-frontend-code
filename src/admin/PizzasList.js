import React, { useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/pizzaAction";
import { FaEdit, FaTrash } from "react-icons/fa";

const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzaData = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaData;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <Container>
      <h1>All Pizza List</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error while fetching data</h1>
      ) : (
        <Table bordered>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((pizza) => (
              <tr key={pizza._id}>
                <td>
                  <img src={pizza.image} alt={pizza.name} height="50" />
                </td>
                <td>{pizza.name}</td>
                <td>
                  {pizza.prices.length === 3 && (
                    <>
                      Small: {pizza.prices[0]}
                      <br />
                      Medium: {pizza.prices[1]}
                      <br />
                      Large: {pizza.prices[2]}
                    </>
                  )}
                </td>
                <td>{pizza.category}</td>
                <td>
                  <Link to={`/admin/edit-pizza/${pizza._id}`}>
                    <Button
                      variant="outline-warning"
                      size="sm"
                      className="mx-1"
                    >
                      <FaEdit />
                    </Button>
                  </Link>

                  <Button variant="outline-danger" size="sm">
                    <FaTrash onClick={()=>{dispatch(deletePizza(pizza._id))}} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default PizzasList;
