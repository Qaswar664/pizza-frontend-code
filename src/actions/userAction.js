
import axios from "axios"
import { API_URL } from "../api/api"
export const registerUser =(user)=>async dispatch=>{
dispatch({type:"USER_REGISTER_REQUEST"})
try {
    const response=await axios.post(`${API_URL}/register`,user)
    console.log(response);
    dispatch({type:"USER_REGISTER_SUCCESS"})
    
} catch (error) {
    dispatch({type:"USER_REGISTER_Fail",payload:error})
    
}
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:"USER_LOGIN_REQUEST"})
    try {
        const response=await axios.post(`${API_URL}/login`,user)
        dispatch({type:"USER_LOGIN_SUCCESS",payload:response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))
        window.location.href = '/'
    } catch (error) {
        dispatch({type:"USER_LOGIN_Fail",payload:error})

    }


}

export const logoutUser=()=>async dispatch=>{    
        localStorage.removeItem('currentUser')
        window.location.href = '/login'
}


export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "GET_USERS_REQUEST" });
    debugger
  
    try {
      const res = await axios.get(`${API_URL}/getallusers`); // Corrected URL
      console.log(res);
      dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "GET_USERS_FAIL", payload: error });
    }
  };