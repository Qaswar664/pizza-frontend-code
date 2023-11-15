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
