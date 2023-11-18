
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const addToCart =
  (pizza, quantity, selectedPrice, variant) => (dispatch, getState) => {
    const updatedQuantity = quantity;
    const updatedPrice = selectedPrice * updatedQuantity;

    const cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      variant: variant,
      quantity: Number(updatedQuantity),
      prices: pizza.prices,
      price: updatedPrice,
    };
    if (cartItem.quantity > 10) {
      toast.error('You can only add 10 pizzas', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Auto close the notification after 3 seconds
      });
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: pizza });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });

        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cartReducer.cartItems)
        );
      }
    }
  };

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
