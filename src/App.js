import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "../src/user/Login";
import Register from "../src/user/Register";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import AdminScreen from "./admin/AdminScreen";
import UserList from "./admin/UserList";
import PizzasList from "./admin/PizzasList";
import AddNewPizza from "./admin/AddNewPizza";
import OrderList from "./admin/OrderList";
import EditPizza from "./admin/EditPizza";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/admin" element={<AdminScreen/>}/>
        <Route path="/admin/all-users" element={<UserList/>}/>
        <Route path="/admin/edit-pizza/:pizzaId" element={<EditPizza/>}/>
        <Route path="/admin/all-pizzas" element={<PizzasList/>}/>
        <Route path="/admin/add-new-pizza" element={<AddNewPizza/>}/>
        <Route path="/admin/all-orders" element={<OrderList/>}/>

      </Routes>
    </Router>
  );
}

export default App;
