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
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/admin/*" element={<AdminScreen />} />
        <Route path="/admin/edit-pizza/:pizzaId" element={<EditPizza />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
