import { useRouteError } from "react-router-dom";
import { Navbar } from "./navBar";

export const ErrorPage = () => {
  const error = useRouteError() as PetErrorType;
  let title = "An error occurred.";
  let message = "Something went wrong.";
  console.log(typeof error);
  if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <>
      <Navbar />
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};
