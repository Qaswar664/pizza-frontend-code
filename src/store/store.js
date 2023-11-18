// import {createStore,combineReducers,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';

// import { getAllPizzaReducer } from '../reducers/pizaaReducer'
// import { cartReducer } from '../reducers/cartReducer';


// const rootReducer = combineReducers({
//     getAllPizzaReducer:getAllPizzaReducer,
//     cartReducer:cartReducer
// })

// const cartItem=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

// const initialState ={
//     cartItem:cartItem
// }

// const middleware = [thunk]


// const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

// export default store


import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllPizzaReducer } from '../reducers/pizaaReducer';
import { cartReducer } from '../reducers/cartReducer';
import { registerUserReducer } from '../reducers/userReducer';

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer:registerUserReducer
});

// Use the same property name here as in combineReducers
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems
  }
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
