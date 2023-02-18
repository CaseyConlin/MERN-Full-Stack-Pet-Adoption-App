import { Link } from "react-router-dom";
import useAuth from "../context/userContext/useAuth";
export const MyAccount = () => {
  // const userData: any = useLoaderData();
  const { user, message } = useAuth();

  if (message) console.log(message);
  if (user) console.log(user);

  return (
    <div className="container mx-auto px-4">
      {user ? (
        <h1>Welcome to Your Account.</h1>
      ) : (
        <h1>You are Not Logged In.</h1>
      )}
      {user ? (
        <ul>
          <li>username: {user.username} </li>
          <li>email: {user.email} </li>
          <li>id: {user._id} </li>
        </ul>
      ) : (
        <p>
          {" "}
          <Link to="/users/login">Login to access your account info.</Link>
        </p>
      )}
      <p></p>
    </div>
  );
};
