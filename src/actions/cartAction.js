export const addToCart=(pizza,quantity,selectedPrice,variant)=>(dispatch,getState)=>{
var cartItems={
    name:pizza.name,
    _id:pizza._id,
    image:pizza.image,
    variant:variant,
    quantity:quantity,
    prices:pizza.prices,
    price:selectedPrice*quantity,
}
dispatch({type:"ADD_TO_CART",payload:cartItems})

localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}