import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/dashboard" element={<HomeScreen/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
