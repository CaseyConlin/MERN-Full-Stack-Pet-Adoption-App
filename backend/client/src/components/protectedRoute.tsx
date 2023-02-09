import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = (children: any) => {
  const [userName, setUserName] = useState(null);

  // useEffect(() => {
  //   fetch("/users/isUserAuth", {
  //     headers: { "x-access-token": `${localStorage.getItem("token")}` },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => (data.isLoggedIn ? setUserName(data.username) : null));
  // }, []);

  if (!userName) {
    return <Navigate to="/users/login" replace />;
  }

  return children;
};
