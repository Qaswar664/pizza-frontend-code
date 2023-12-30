import axios from "axios";
import { API_URL } from "../api/api";

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
