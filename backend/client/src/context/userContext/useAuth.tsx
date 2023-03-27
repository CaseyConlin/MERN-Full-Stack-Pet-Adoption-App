import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} from "../../services/api";

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
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data.user);
      })
      .catch((_error) => {})
      .finally(() => setLoadingInitial(false));
  }, []);

  const register = (user: RegisterUser) => {
    setLoading(true);
    setError(undefined);
    registerUser(user)
      .then((data) => {
        setUser(data.user);
        setMessage(data.message);
        setTimeout(() => {
          setMessage(undefined);
          navigate("/users/login");
        }, 2000);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const login = (user: LoginUser) => {
    setLoading(true);
    setError(undefined);
    loginUser(user)
      .then((data) => {
        setUser(data.user);
        setMessage(data.message);
        setTimeout(() => {
          setMessage(undefined);
          navigate("/users/my-account");
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
        navigate("/");
      }, 2000);
    });
  };

  const memoedValue = useMemo(
    () => ({
      user,
      message,
      error,
      loading,
      register,
      login,
      logout,
    }),
    [user, message, error, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
