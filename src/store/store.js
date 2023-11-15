import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllPizzaReducer } from '../reducers/pizaaReducer'
import { cartReducer } from '../reducers/cartReducer';


const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer
})

const cartItem=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const initialState ={
    cartItem:cartItem
}

const middleware = [thunk]


const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store