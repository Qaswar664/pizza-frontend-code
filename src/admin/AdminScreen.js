import React, { useEffect } from "react";
import { Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { Link, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import PizzasList from "./PizzasList";
import AddNewPizza from "./AddNewPizza";
import OrderList from "./OrderList";

const AdminScreen = ({ history }) => {
  useEffect(() => {
    // Check if the user is logged in and is an admin
    // Redirect to the login page if not
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.isAdmin) {
      history.push("/");
    }
  }, [history]);

  return (
    <Container>
      <div className="mt-2">
        <h1 className="text-center   pt-5">
          Admin Panel
        </h1>
      </div>
      <div className="d-flex">
        <Col md={2}>
          <div>
            <h4>Menu</h4>
            <ButtonGroup vertical>
              <Link to="/admin/" className="btn btn-secondary mb-2">
                All Users
              </Link>
              <Link to="/admin/all-pizzas" className="btn btn-secondary mb-2">
                All Pizzas
              </Link>
              <Link
                to="/admin/add-new-pizza"
                className="btn btn-secondary mb-2"
              >
                Add New Pizza
              </Link>
              {/* <Link to="/admin/all-orders" className="btn btn-secondary mb-2">
                All Orders
              </Link> */}
            </ButtonGroup>
          </div>
        </Col>
        <Col md={10}>
          <Routes>
            <Route path="" element={<UserList />} />
            <Route path="all-pizzas" element={<PizzasList />} />
            <Route path="add-new-pizza" element={<AddNewPizza />} />
            <Route path="all-orders" element={<OrderList />} />
          </Routes>
        </Col>
      </div>
    </Container>
  );
};

export default AdminScreen;
