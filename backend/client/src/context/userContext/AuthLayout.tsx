import { useOutlet } from "react-router-dom";
import { AuthProvider } from "./useAuth";

export const AuthLayout = () => {
  const outlet = useOutlet();
  return <AuthProvider>{outlet}</AuthProvider>;
};
