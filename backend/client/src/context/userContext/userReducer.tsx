import { useState } from "react";
import { LOGIN, LOGOUT } from "./userTypes";
import { loginUser, logoutUser } from "../../services/api";

const Storage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user ? user : {}));
};

export const userSet = (user: User) => {
  Storage(user);
  let userInfo = user;
  return userInfo;
};
// export const sumItems = (cartItems: CartPet[]) => {
//   Storage(cartItems);
//   let itemCount = cartItems.length;
//   let total = cartItems.reduce((total, item) => total + item.fee, 0).toFixed(2);
//   return { itemCount, total };
// };

const CartReducer = (state: any, action: UserActionType) => {
  switch (action.type) {
    case LOGIN:
      const loginUser = async (loginUser: User) => {
        const res = await fetch("/users/login", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(loginUser),
        });
        if (res.status !== 200) {
          const data = await res.json();
          // setMessage(undefined);
          // return setErrorMessage(data.message);
          return data.message;
        } else {
          const data = await res.json();
          console.log(data.user);
          return { ...state, user: data.user };
          // localStorage.setItem("token", data.token);
          // setErrorMessage(undefined);
          // setMessage(data.message);
          // setTimeout(() => {
          //   navigate("/users/my-account");
          // }, 2000);
        }
      };
      console.log(state);
      loginUser(action.payload);
      return;

    // if (
    //     !state.cartItems.find(
    //       (item: CartPet) => item._id === action.payload._id
    //     )
    //   ) {
    //     state.cartItems.push({
    //       ...action.payload,
    //       // quantity: 1,
    //     });
    //   }

    //   return {
    //     ...state,

    //     cartItems: [...state.cartItems],
    //   };

    // case LOGOUT:
    //   return {
    //     ...state,
    //     ...sumItems(
    //       state.cartItems.filter(
    //         (item: CartPet) => item._id !== action.payload._id
    //       )
    //     ),
    //     cartItems: [
    //       ...state.cartItems.filter(
    //         (item: CartPet) => item._id !== action.payload._id
    //       ),
    //     ],
    //   };

    // case CHECKOUT:
    //   return {
    //     cartItems: [],
    //     checkout: true,
    //     ...sumItems([]),
    //   };

    // case CLEAR:
    //   return {
    //     cartItems: [],
    //     ...sumItems([]),
    //   };

    case LOGOUT:
      logoutUser();
      return console.log("hey");

    default:
      return state;
  }
};

export default CartReducer;
