import axios from "axios";

export const placeOrder = (token,subTotal)=>async (dispatch,getState)=>{
    dispatch({ type: "PLACE_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer;
    const cartItems = getState().cartReducer.cartItems;
    try {
        const res = await axios.post('api/orders/placeorder',{
            token,
            subTotal,
            currentUser,
            cartItems,
        });
        dispatch({ type: "PLACE_ORDER_SUCCESS" });
        console.log(res,'res of placeorder');


        
    } catch (error) {
        dispatch({ type: "PLACE_ORDER_FAIL" });

        console.log(error);
    }
}

export const getUserOrders =()=>async(dispatch,getState)=>{
    const currentUser = getState().loginUserReducer;
    dispatch({ type: "USER_ORDER_REQUEST" });
    try {
        const response= await axios.post('api/orders/getuserorder',{
            userid:currentUser._id
        })
        console.log(response,'user order response');
        dispatch({ type: "USER_ORDER_SUCCESS",payload:response.data });



    } catch (error) {
        dispatch({ type: "USER_ORDER_FAIL",payload:error });

    }
}

export const getAllOrders =()=>async(dispatch,getState)=>{
    // const currentUser = getState().loginUserReducer;
    dispatch({ type: "ALL_ORDER_REQUEST" });
    try {
        const response= await axios.get('api/orders/alluserorder')
        console.log(response,'user order response');
        dispatch({ type: "ALL_ORDER_SUCCESS",payload:response.data });
    } catch (error) {
        dispatch({ type: "ALL_ORDER_FAIL",payload:error });

    }
}