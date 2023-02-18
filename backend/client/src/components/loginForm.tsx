import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/userContext/useAuth";

export const LoginFrom = () => {
  const navigate = useNavigate();

  const { login, message, error, user, loading } = useAuth();

  const handleLogin = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: any = e.target;
    const userData = {
      email: form[0].value,
      password: form[1].value,
    };

    login(userData);
  };

  if (user) {
    setTimeout(() => {
      navigate("/users/my-account");
    }, 2000);
  }
  return (
    <>
      <h1 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
        Log In
      </h1>

      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center lg:items-start lg:flex-wrap flex-col-reverse lg:flex-row h-full g-6 text-gray-800">
            <div className="mt-12 lg:mt-0 md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src={`/uploads/login.jpg`}
                className="w-full rounded-lg"
                alt="cat"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email"
                    disabled={loading}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    disabled={loading}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <Link
                    to="/users/register "
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    New to petConnect? Register for an account.
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
                  disabled={loading}
                >
                  Log In{loading}
                </button>
              </form>
              <div className="flex justify-between items-center my-6">
                <p className="text-black-600">
                  For testing purposes, you can log in with email:{" "}
                  <b>test@fake.com</b> and password: <b>fake</b>.
                </p>
              </div>
              {message ? (
                <div
                  className="bg-blue-100 text-center rounded-lg py-3 px-6 my-4 text-base text-blue-700 mb-3"
                  role="alert"
                >
                  {message}
                </div>
              ) : null}
              {error && (
                <div
                  className="bg-red-100 text-center rounded-lg py-3 px-6 my-4 text-base text-red-700 mb-3"
                  role="alert"
                >
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
