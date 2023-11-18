
import axios from "axios"
import { API_URL } from "../api/api"
export const registerUser =(user)=>async dispatch=>{
dispatch({type:"USER_REGISTER_REQUEST"})
try {
    const response=await axios.post(`${API_URL}/register`,user)
    dispatch({type:"USER_REGISTER_SUCCESS"})
    
} catch (error) {
    dispatch({type:"USER_REGISTER_Fail",payload:error})
    
}
}