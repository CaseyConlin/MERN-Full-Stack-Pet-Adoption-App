import { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "../context/cartContext/cartContext";
import useAuth from "../context/userContext/useAuth";

export const Navbar = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { user, message, logout } = useAuth();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
        {message && location.pathname !== "/users/login" ? (
          <div
            className="fixed w-1/2 inset-x-0 max-w-max mx-auto top-1 transition-opacity ease-in duration-300 bg-opacity-80 bg-green-100 rounded-lg py-1 px-2  text-base text-green-700"
            role="alert"
          >
            {message}
          </div>
        ) : (
          ""
        )}
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              to="/"
            >
              petConnectApp
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-s  leading-snug text-white hover:no-underline"
                  to={"/about"}
                >
                  <span className="ml-2">About the App</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-s  font-bold leading-snug text-white hover:no-underline"
                  to={"pets/"}
                >
                  <span className="ml-2">See All Pets</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:no-underline"
                  to="pets/?species=cat"
                >
                  <span className="ml-2">Cats</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:no-underline"
                  to="pets/?species=dog"
                >
                  <span className="ml-2">Dogs</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:no-underline"
                  to="pets/?species=bunny"
                >
                  <span className="ml-2">Bunnies</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:no-underline"
                  to="pets/?species=chicken"
                >
                  <span className="ml-2">Chickens</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:no-underline"
                  to="pets/?species=rat"
                >
                  <span className="ml-2">Rats</span>
                </NavLink>
              </li>

              <li className="nav-item">
                {user ? (
                  <NavLink
                    onClick={() => setNavbarOpen(false)}
                    className="px-3 py-2 flex items-center text-s  leading-snug text-white hover:no-underline"
                    to="users/my-account"
                  >
                    <span className="ml-2">My Profile</span>
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={() => setNavbarOpen(false)}
                    className="px-3 py-2 flex items-center text-s  leading-snug text-white hover:no-underline"
                    to="users/login"
                  >
                    <span className="ml-2">Login</span>
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {user ? (
                  <NavLink
                    className="px-3 py-2 flex items-center text-s leading-snug text-white hover:no-underline"
                    onClick={logout}
                    to="/"
                  >
                    <span className="ml-2">Log Out</span>
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={() => setNavbarOpen(false)}
                    className="px-3 py-2 flex items-center text-s leading-snug text-white hover:opacity-110"
                    to="users/register"
                  >
                    <span className="ml-2">Register</span>
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-1 flex items-center justify-center text-s font-bold leading-snug text-white hover:scale-110 duration-300 hover:no-underline"
                  to="/cart"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="w-10 h-10 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="50 100 600 400"
                  >
                    <g fill="currentColor">
                      <path d="m484.2 167.89h15.422l-88.594-88.594c-2.0781-2.0781-5.5781-2.0781-7.7656 0-1.4219 1.4219-1.6406 3.0625-1.6406 3.8281 0 0.875 0.21875 2.5156 1.6406 3.8281z" />
                      <path d="m296.73 86.953c1.4219-1.4219 1.6406-3.0625 1.6406-3.8281 0-0.875-0.21875-2.5156-1.6406-3.8281-2.0781-2.0781-5.5781-2.0781-7.7656 0l-88.594 88.594h15.422z" />
                      <path d="m564.7 189.77h-429.41c-18.047 0-32.812 14.766-32.812 32.812v4.9219c0 18.047 14.766 32.812 32.812 32.812h429.41c18.047 0 32.812-14.766 32.812-32.812v-4.9219c0-18.047-14.766-32.812-32.812-32.812z" />
                      <path d="m350 422.73c39.812-16.297 53.703-43.422 49.656-63.438-2.5156-11.812-10.5-18.922-21.438-18.922-6.5625 0-14.438 2.9531-21.984 8.2031-3.8281 2.625-8.8594 2.625-12.578-0.10938-7.6562-5.4688-15.312-8.4219-22.094-8.4219-10.938 0-18.812 7.1094-21.219 19.141-4.0469 20.344 9.7344 47.688 49.656 63.547z" />
                      <path d="m175.55 454.34c2.4062 15.969 16.297 28 32.484 28h284.05c16.188 0 30.078-12.031 32.484-28l25.375-172.16h-399.88zm103.36-99.422c4.375-22.312 21.219-36.641 42.656-36.641 9.4062 0 19.031 2.8438 28.547 8.4219 9.4062-5.3594 19.031-8.0938 28.219-8.0938 21.328 0 38.172 14.219 42.766 36.312v0.10938c6.0156 29.422-12.031 68.469-65.625 89.141-0.21875 0.10938-0.4375 0.10938-0.65625 0.21875-1.6406 0.54688-3.2812 0.76562-4.9219 0.76562s-3.1719-0.21875-4.9219-0.76562c-0.21875-0.10938-0.32812-0.10938-0.54688-0.21875-53.484-20.344-71.422-59.5-65.516-89.25z" />
                    </g>
                  </svg>
                  {cartItems.length > 0 && (
                    <span className="w-5 h-5 rounded-full flex justify-center items-center -ml-3 -mt-6 leading-none text-center whitespace-nowrap bg-red-600 text-white text-xs rounded-full 	">
                      {cartItems.length}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
