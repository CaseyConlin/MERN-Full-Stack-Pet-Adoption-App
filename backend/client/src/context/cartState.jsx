import { useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";
import { sumItems } from "./cartReducer";

const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const CartState = ({ children }) => {
  //   Initial State of the cart
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  //Set up the reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //Function to handle when an item is added from the store into the Cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  //Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  //Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    //Add the functions that have been defined above into the Context provider, and pass on to the children
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        handleCheckout,
        clearCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
