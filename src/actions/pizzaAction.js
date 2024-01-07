import axios from "axios";
import { API_URL } from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const res = await axios.get(`${API_URL}/get-pizza`); // Corrected URL
    console.log(res);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });

  try {
    const res = await axios.post(`${API_URL}/add-pizza`,{pizza}); // Corrected URL
    console.log(res);
    dispatch({ type: "ADD_PIZZAS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: error });
  }
};


export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });

  try {
    const res = await axios.get(`${API_URL}/edit-pizza/${pizzaId}`);
    console.log(res);
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: error });
  }
};


// export const updatePizza = (updatedPizza) => async (dispatch) => {
//   dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });

//   try {
//     const res = await axios.post(`${API_URL}/update-pizza/${updatedPizza}`);
//     window.location.href='/admin/all-pizzas'
//     console.log(res);
//     dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: res.data });
//   } catch (error) {
//     dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: error });
//   }
// };

// Update the updatePizza action
export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });

  try {
    const res = await axios.post(`${API_URL}/update-pizza`, { updatedPizza });
    window.location.href = '/admin/all-pizzas';
    console.log(res);
    dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: error });
  }
};


export const deletePizza= async(pizzaId)=> {
  try {
    const res = await axios.post(`${API_URL}/delete-pizza`,{pizzaId});
    toast.success('Pizza deleted successfully')
    console.log(res);
  } catch (error) {
    toast.error('Error while deleting pizza')
    
  }
} 

