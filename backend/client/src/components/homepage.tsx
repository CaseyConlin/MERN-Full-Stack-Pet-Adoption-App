import { Link } from "react-router-dom";
import { Carousel } from "./carousel";
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
        <p className=" my-2 w-9/12 my-1 mx-auto text-center">
          The shopping basket / cart is managed as state using React context in
          browser local storage. The total cost is transmitted to the backend
          for processing through Stripe at checkout.
        </p>
        <p className=" my-2 w-9/12 my-1 mx-auto text-center">
          Routing is handled clientside by React Router, with useLoaderData hook
          making API calls where possible.
        </p>
        <p className=" my-2 w-9/12 my-1 mx-auto text-center">
          User authentication state is managed with React context
        </p>
        <p className=" my-2 w-9/12 my-1 mx-auto text-center">
          The app is styled with Tailwind and uses Typescript.
        </p>
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
//  <li
// key={pet._id}
// className="max-w-sm md:w-2/5 bg-white border border-gray-200 rounded-lg shadow"
// >
// <Link to={`/pet/${pet._id}`}>
//   <img
//     className="rounded-t-lg"
//     src={`/uploads/${pet.image}`}
//     alt={pet.species + " for adoption."}
//   />
// </Link>
// <div className="p-3">
//   <div className="flex items-center justify-between mb-2">
//     <Link to={`/pet/${pet._id}`}>
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
//         {pet.name}
//       </h5>
//       </Link>

//   </div>
//   <div className="flex items-center justify-start mb-2">
//     <button
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//     >
//       <Link
//         to={`/pets/?species=${pet.species}`}
//         className="inline-flex items-center mr-3 px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-800"
//       >
//         {"More " + multipleSpeciesStringConverter(pet.species)}
//         <svg
//           aria-hidden="true"
//           className="w-4 h-4 ml-2 -mr-1"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
//         </svg>
//       </Link>
//     </button>

//   </div>
// </div>
// </li> }}
