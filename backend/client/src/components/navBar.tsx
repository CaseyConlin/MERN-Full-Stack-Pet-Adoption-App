import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("token");
    await navigate("/users/login");
  };
  useEffect(() => {
    fetch("/users/isUserAuth", {
      headers: { "x-access-token": `${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => (data.isLoggedIn ? setUserName(data.username) : null));
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
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
                  className="px-3 py-2 flex items-center text-s ppercase font-bold leading-snug text-white hover:opacity-75"
                  to={"pets/"}
                >
                  <span className="ml-2">See All Pets</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:opacity-75"
                  to="pets/?species=cat"
                >
                  <span className="ml-2">Cats</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:opacity-75"
                  to="pets/?species=dog"
                >
                  <span className="ml-2">Dogs</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:opacity-75"
                  to="pets/?species=bunny"
                >
                  <span className="ml-2">Bunnies</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:opacity-75"
                  to="pets/?species=chicken"
                >
                  <span className="ml-2">Chickens</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:opacity-75"
                  to="pets/?species=rat"
                >
                  <span className="ml-2">Rats</span>
                </NavLink>
              </li>

              <li className="nav-item">
                {userName ? (
                  <NavLink
                    className="px-3 py-2 flex items-center text-s  leading-snug text-white hover:opacity-75"
                    to="users/my-account"
                  >
                    <span className="ml-2">My Profile</span>
                  </NavLink>
                ) : (
                  <NavLink
                    className="px-3 py-2 flex items-center text-s  leading-snug text-white hover:opacity-75"
                    to="users/login"
                  >
                    <span className="ml-2">Login</span>
                  </NavLink>
                )}
              </li>

              <li className="nav-item">
                {userName ? (
                  <div
                    className="px-3 py-2 flex items-center text-s leading-snug text-white hover:opacity-75"
                    onClick={logout}
                  >
                    <span className="ml-2">Log Out</span>
                  </div>
                ) : (
                  <NavLink
                    className="px-3 py-2 flex items-center text-s leading-snug text-white hover:opacity-75"
                    to="users/register"
                  >
                    <span className="ml-2">Register</span>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
