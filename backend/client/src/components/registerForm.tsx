import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const handleRegister = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: any = e.target;
    const user = {
      username: form[0].value,
      email: form[1].value,
      password: form[2].value,
    };

    const sendUser = async () => {
      const res = await fetch("/users/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });
      if (res.status === 400) {
        const data = await res.json();
        setMessage(undefined);
        return setErrorMessage(data.message);
      } else {
        const data = await res.json();
        setErrorMessage(undefined);
        setMessage(data.message);
        setTimeout(() => {
          navigate("/users/login");
        }, 3000);
      }
    };
    sendUser();
  };

  return (
    <>
      <h1 className="font-medium text-center leading-tight text-5xl mt-0 mb-1 text-slate-700">
        Register
      </h1>

      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center lg:items-start lg:flex-wrap flex-col-reverse lg:flex-row h-full g-6 text-gray-800">
            <div className="mt-12 lg:mt-0 md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src={`/uploads/register.jpg`}
                className="w-full rounded-lg"
                alt="cat"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleRegister}>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <Link
                    to="/users/login"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Already have an account? Login.
                  </Link>
                </div>

                <button
                  type="submit"
                  className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
                  text-base
                  flex
                  rounded-lg
                  items-center
                  justify-center
                  leading-none
                  text-white
                  bg-slate-700
                  w-full
                  py-4
                  hover:bg-gray-900"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </button>
              </form>
              {message ? (
                <div
                  className="bg-blue-100 text-center rounded-lg py-3 px-6 my-4 text-base text-blue-700 mb-3"
                  role="alert"
                >
                  {message}
                </div>
              ) : null}
              {errorMessage && (
                <div
                  className="bg-red-100 text-center rounded-lg py-3 px-6 my-4 text-base text-red-700 mb-3"
                  role="alert"
                >
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};