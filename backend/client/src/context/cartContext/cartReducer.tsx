import { ADD_TO_CART, REMOVE_ITEM, CHECKOUT, CLEAR } from "./cartTypes";

const Storage = (cartItems: CartPet[]) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems: CartPet[]) => {
  Storage(cartItems);
  let itemCount = cartItems.length;
  let total = cartItems.reduce((total, item) => total + item.fee, 0).toFixed(2);
  return { itemCount, total };
};

const CartReducer = (state: any, action: CartActionType) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (
        !state.cartItems.find(
          (item: CartPet) => item._id === action.payload._id
        )
      ) {
        state.cartItems.push({
          ...action.payload,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter(
            (item: CartPet) => item._id !== action.payload._id
          )
        ),
        cartItems: [
          ...state.cartItems.filter(
            (item: CartPet) => item._id !== action.payload._id
          ),
        ],
      };

    case CHECKOUT:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case CLEAR:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};

export default CartReducer;
