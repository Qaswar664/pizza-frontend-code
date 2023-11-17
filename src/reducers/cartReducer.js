export const cartReducer = (state = { cartItems: [] }, action) => {
    console.log(state.cartItems,'reducerrrrrrrrrrrr');

    switch (action.type) {
      case "ADD_TO_CART":
        const { _id, variant } = action.payload;
        const alreadyExists = state.cartItems.find(
          (item) => item._id === _id && item.variant === variant
        );
  
        if (alreadyExists) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === _id && item.variant === variant ? action.payload : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            
          };
          
        }
  
      default:
        return state;
    }
  };
  