import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
        About the petConnect App
      </h1>

      <section className="">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center lg:items-start lg:flex-wrap flex-col-reverse lg:flex-row h-full g-6 text-gray-800">
            <div className="flex flex-col mt-12 lg:mt-0 md:w-8/12 lg:w-6/12 mb-12 md:mb-0 justify-center">
              <div className="flex-row">
                <div className="flex flex-col sm:flex-row gap-5 bg-white border border-gray-200 rounded-lg shadow">
                  <div
                    className="w-full h-80 sm:h-auto sm:w-2/5 sm:shrink-0 lg:h-80 bg-cover bg-center"
                    style={{ backgroundImage: "url(/uploads/about.jpg)" }}
                  ></div>
                  <div className="p-3">
                    <h2 className="mb-2 text-2xl font-bold mx-auto">
                      About the Developer
                    </h2>
                    <p className="my-2 mx-auto text-left">
                      Casey Conlin is a fullstack developer living in Rosendale,
                      NY.
                    </p>
                    <p className="my-2 mx-auto text-left">
                      His family includes at least one of each of the different
                      kinds of animals on this site and in most cases... more
                      than one.
                    </p>
                    <div className="flex flex-row py-2 gap-2">
                      <a
                        href="https://github.com/CaseyConlin/"
                        target="_blank"
                        title="Oxford Pet Dataset"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/caseyconlin/"
                        target="_blank"
                        title="Oxford Pet Dataset"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      {/* <a href="">
                            linkedin.com/in/CaseyConlin
                        </a> */}
                    </div>
                  </div>
                </div>
                <h2 className="mt-5  text-2xl font-bold text-center mx-auto">
                  Credits
                </h2>
                <p className=" my-2  my-1 mx-auto">
                  Basket icons by Alexander from{" "}
                  <a
                    href="https://thenounproject.com/browse/icons/term/basket/"
                    target="_blank"
                    title="basket Icons"
                    rel="noreferrer"
                  >
                    Noun Project
                  </a>
                </p>
                <p className=" my-2  my-1 mx-auto">
                  Cat and dog images come from{" "}
                  <a
                    href="https://www.robots.ox.ac.uk/~vgg/data/pets/"
                    target="_blank"
                    title="Oxford Pet Dataset"
                    rel="noreferrer"
                  >
                    The Oxford-IIIT Pet Dataset
                  </a>{" "}
                  by Omkar M Parkhi and Andrea Vedaldi and Andrew Zisserman and
                  C. V. Jawahar.
                </p>
              </div>
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <h2 className=" mb-3  text-2xl font-bold mx-auto text-center">
                About the App
              </h2>

              <p className="my-3  mx-auto text-center">
                petConnect is a demo fullstack MERN application that allows you
                to to shop for and adopt your next pet. You can access the{" "}
                <a
                  className="text-slate-700 font-bold"
                  href="https://github.com/CaseyConlin/MERN-Full-Stack-Pet-Adoption-App"
                >
                  repo here.
                </a>
              </p>
              <p className="  text-lg font-bold mx-auto text-center">Backend</p>

              <p className="  my-2 mx-auto text-center">
                Node.js, Express, and Mongoose communicate with collections on
                MongoDB.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The API handles filtering and sorting pets results based on
                client search params. See the{" "}
                <Link to="/pets" className="text-slate-700 font-bold">
                  All Pets
                </Link>{" "}
                page to use the sorting and filtering features.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The API also handles registering users, and authenticating users
                using HTTP-only cookies and JWT. See the{" "}
                <Link to="/users/login" className="text-slate-700 font-bold">
                  Login
                </Link>{" "}
                page to login as a test user, or register for a new account
                using the{" "}
                <Link to="/users/register" className="text-slate-700 font-bold">
                  Register
                </Link>{" "}
                page.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The backend processes payments using Stripe's API via the{" "}
                <Link to="/checkout" className="text-slate-700 font-bold">
                  Checkout
                </Link>{" "}
                page.
              </p>

              <p className="  mt-3 text-lg font-bold mx-auto text-center">
                Frontend
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                Client side the React app builds search params and calls to the
                API.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The shopping basket / cart is managed as state using React
                context in browser local storage. The total cost is transmitted
                to the backend for processing through Stripe at checkout.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                Routing is handled clientside by React Router, with
                useLoaderData hook making API calls where possible.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                User authentication state is managed with React context.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The app is styled with Tailwind and uses Typescript.
              </p>

              <p className="  my-5 text-lg font-bold mx-auto text-center">
                If you have any questions contact{" "}
                <a
                  className="text-blue-800"
                  href="mailto:casey.conlin@gmail.com"
                >
                  Casey Conlin
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
