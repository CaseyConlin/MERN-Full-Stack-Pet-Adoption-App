import { createContext } from "react";

const UserContext = createContext({
  loggedIn: false,
  user: {} as User,
  login: (user: User) => {},
  logout: () => {},
});

export default UserContext;
