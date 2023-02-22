import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: (pet: CartPet) => {},
  removeFromCart: (pet: CartPet) => {},
  handleCheckout: () => {},
  total: 0,
  itemCount: 0,
});

export default CartContext;
