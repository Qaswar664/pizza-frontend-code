// import React from "react";
// import Nav from "react-bootstrap/Nav";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { logoutUser } from "../../actions/userAction";

// import "./header.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const cartState = useSelector((state) => state.cartReducer);
//   const userState = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userState;
//   function login() {
//     navigate("/login");
//   }
//   function register() {
//     navigate("/register");
//   }
//   function cart() {
//     navigate("/cart");
//   }
//   function home() {
//     navigate("/");
//   }
//   return (
//     <Nav className="header border shadow" sticky="top">
//       <Nav.Item></Nav.Item>
//       <Nav.Item className="d-none d-md-block">
//         <Nav.Link className="text-secondary fs-5" onClick={home}>
//           Dashboard
//         </Nav.Link>
//       </Nav.Item>
//       <div className="d-flex justify justify-content-end">
//       {currentUser ? (
//         <Nav.Item className="d-none d-md-block">
//           <Nav.Link  onClick={home}>
//             <NavDropdown
//             style={{marginTop:'-8px'}}
//               title={<span className="text-secondary fs-5">{currentUser.name}</span>}
//               id="nav-dropdown"
//               className="text-secondary fs-5" // Set the color of the dropdown icon
//             >
//               <NavDropdown.Item eventKey="4.1" className="text-secondary fs-5">
//                 Order
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 eventKey="4.1"
//                 onClick={() => dispatch(logoutUser())}
//                 className="text-secondary fs-5"
//               >
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav.Link>
//         </Nav.Item>
//       ) : (
//         <>
//           <Nav.Item className="d-none d-md-block">
//             <Nav.Link className="text-secondary fs-5" onClick={login}>
//               Login
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="d-none d-md-block">
//             <Nav.Link className="text-secondary fs-5 " onClick={register}>
//               Register
//             </Nav.Link>
//           </Nav.Item>
//         </>
//       )}

//       <Nav.Item>
//         <Nav.Link className="text-secondary fs-5" onClick={cart}>
//           Cart
//           <span
//             style={{ marginLeft: "3px" }}
//             className="bg-secondary badge badge-success "
//           >
//             {cartState.cartItems.length}
//           </span>
//         </Nav.Link>
//       </Nav.Item>
//       </div>
//     </Nav>
//   );
// };

// export default Header;














import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { logoutUser } from "../../actions/userAction";
import "./header.css";
import Filters from "../../admin/Filters";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  function login() {
    navigate("/login");
  }

  function register() {
    navigate("/register");
  }

  function cart() {
    navigate("/cart");
  }

  function home() {
    navigate("/");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow p-2"  fixed="top">
      <Navbar.Brand onClick={home} style={{cursor:'pointer'}}>Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {currentUser ? (
            <NavDropdown title={currentUser.name} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={home}>Dashboard</NavDropdown.Item>
              <NavDropdown.Item onClick={() => dispatch(logoutUser())}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Nav.Link onClick={login}>Login</Nav.Link>
              <Nav.Link onClick={register}>Register</Nav.Link>
            </>
          )}
          <Nav.Link onClick={cart}>
            Cart
            <span className="bg-secondary badge badge-success" style={{ marginLeft: "3px" }}>
              {cartState.cartItems.length}
            </span>
          </Nav.Link>
        </Nav>
        
          <Filters/>
       
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
