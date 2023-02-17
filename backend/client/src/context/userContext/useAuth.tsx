import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { loginUser, getUser } from "../../services/api";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User>();

  //   useEffect(() => {
  //     getUser()
  //       .then((user) => setUser(user))
  //       .catch((_error) => {
  //         return;
  //       });
  //     //   .finally(() => setLoadingInitial(false));
  //   }, []);

  const login = (user: User) => {
    loginUser(user).then((userRes) => {
      setUser(userRes);
    });
  };
  const memoedValue = useMemo(
    () => ({
      user,
      login,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
