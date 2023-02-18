import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { loginUser, logoutUser, getUser } from "../../services/api";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User>();
  const [message, setMessage] = useState<AuthMessage>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  //   const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    getUser().then((data) => {
      setUser(data.user);
    });
    //   .finally(() => setLoadingInitial(false));
    //   .catch((_error) => {});
    return function cleanup() {
      setError(undefined);
    };
  }, []);

  const login = (user: User) => {
    setLoading(true);
    setError(undefined);
    loginUser(user)
      .then((data) => {
        setUser(data.user);
        setMessage(data.message);
        setTimeout(() => {
          setMessage(undefined);
        }, 2000);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    logoutUser().then((data) => {
      setUser(undefined);
      setMessage(data.message);
      setTimeout(() => {
        setMessage(undefined);
      }, 2000);
    });
  };

  const memoedValue = useMemo(
    () => ({
      user,
      message,
      error,
      loading,
      login,
      logout,
    }),
    [user, message, error, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
