import React ,{useEffect}from 'react';
import { Col, Container, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import PizzasList from './PizzasList';
import AddNewPizza from './AddNewPizza';
import { useDispatch, useSelector } from "react-redux";
import OrderList from './OrderList';

const AdminScreen = ({history}) => {
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    console.log(userState);

    useEffect(() => {
      if(localStorage.getItem('currentUser')===null || !currentUser.isAdmin){
        window.location.href="/"
      }
    }, [])
  return (
    <Container>
      <h1 className='text-center bg-light shadow text-secondary p-2'>Admin Panel</h1>
      <div className="d-flex">
        <Col md={2}>
          <div>
            <h4>Menu</h4>
            <ButtonGroup vertical>
              <Link to="/admin/all-users" className="btn btn-secondary mb-2">
                All Users
              </Link>
              <Link to="/admin/all-pizzas" className="btn btn-secondary mb-2">
                All Pizzas
              </Link>
              <Link to="/admin/add-new-pizza" className="btn btn-secondary mb-2">
                Add New Pizza
              </Link>
              <Link to="/admin/all-orders" className="btn btn-secondary mb-2">
                All Orders
              </Link>
            </ButtonGroup>
          </div>
        </Col>
        <Col md={10}>
           
        </Col>
      </div>
    </Container>
  );
};

export default AdminScreen;
