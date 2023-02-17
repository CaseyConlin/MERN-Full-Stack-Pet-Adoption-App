import { useReducer } from "react";
import { loginUser } from "../../services/api";
import UserContext from "./userContext";
import UserReducer from "./userReducer";

// const storage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems") || "{}")
//   : [];

const storage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") || "{}")
  : {};

export const UserState: React.FC<Props> = ({ children }) => {
  const initialState = {
    user: storage,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = (user: User) => (dispatch: any) => {};

  // const login = (payload: User) => {
  //   dispatch({ type: "LOGIN", payload });
  // };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <UserContext.Provider
      value={{
        // showCart: state.showCart,
        // cartItems: state.cartItems,
        user: state.user,
        login,
        logout,
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
