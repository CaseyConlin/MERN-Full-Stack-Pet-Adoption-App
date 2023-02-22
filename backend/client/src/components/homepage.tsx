import { Link } from "react-router-dom";
import { Carousel } from "./carousel/carousel";

export const Homepage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
        Let's find you a pet!
      </h1>
      <p className="my-3 w-10/12 mx-auto text-center">
        Use petConnect to find the newest member of your family.
      </p>
      <p className="my-3 w-9/12 mx-auto text-center">
        petConnect is a demo fullstack MERN application that allows you to to
        shop for and adopt your next pet!
      </p>

      <Carousel />

      <h2 className=" mt-5 mb-3 w-10/12 text-2xl font-bold mx-auto text-center">
        About the App
      </h2>

      <p className=" w-10/12 text-lg font-bold mx-auto text-center">Backend</p>

      <p className=" w-9/12 my-1 mx-auto text-center">
        Node.js, Express, and Mongoose communicate with collections on MongoDB.
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        The API handles filtering and sorting pets results based on client
        search params. See the{" "}
        <Link to="/pets" className="text-slate-700 font-bold">
          All Pets
        </Link>{" "}
        page to use the sorting and filtering features.
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        The API also handles registering users, and authenticating users using
        HTTP-only cookies and JWT. See the{" "}
        <Link to="/users/login" className="text-slate-700 font-bold">
          Login
        </Link>{" "}
        page to login as a test user, or register for a new account using the{" "}
        <Link to="/users/register" className="text-slate-700 font-bold">
          Register
        </Link>{" "}
        page.
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        The backend processes payments using Stripe's API via the{" "}
        <Link to="/checkout" className="text-slate-700 font-bold">
          Checkout
        </Link>{" "}
        page.
      </p>

      <p className=" w-10/12 mt-3 text-lg font-bold mx-auto text-center">
        Frontend
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        Client side the React app builds search params and calls to the API.
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        The shopping basket / cart is managed as state using React context in
        browser local storage. The total cost is transmitted to the backend for
        processing through Stripe at checkout.
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        Routing is handled clientside by React Router, with useLoaderData hook
        making API calls where possible.
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        User authentication state is managed with React context.
      </p>
      <p className=" my-2 w-9/12 my-1 mx-auto text-center">
        The app is styled with Tailwind and uses Typescript.
      </p>

      <p className=" w-10/12 my-5 text-lg font-bold mx-auto text-center">
        If you have any questions contact{" "}
        <a className="text-blue-800" href="mailto:casey.conlin@gmail.com">
          Casey Conlin
        </a>
      </p>
    </div>
  );
};
