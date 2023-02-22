import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext/cartContext";
import { multipleSpeciesStringConverter } from "../helpers";

export const PetCard = (pet: PetCard) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = (pet: PetCard) => {
    return !!cartItems.find((item: PetCard) => item._id === pet._id);
  };

  return (
    <li
      key={pet._id}
      className="max-w-sm md:w-2/5 bg-white border border-gray-200 rounded-lg shadow"
    >
      <Link to={`/pet/${pet._id}`}>
        <img
          className="rounded-t-lg"
          src={`/uploads/${pet.image}`}
          alt={pet.species + " for adoption."}
        />
      </Link>
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <Link to={`/pet/${pet._id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {pet.name}
            </h5>
          </Link>
          {!isInCart(pet) ? (
            <button
              className="flex flex-col-reverse items-center justify-center mr-2  leading-snug text-gray-900 hover:no-underline"
              onClick={() => addToCart(pet)}
            >
              Add
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-12 h-12 fill-slate-900 hover:scale-110 duration-300"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="50 100 600 400"
              >
                <g>
                  <path d="m484.2 167.89h15.422l-88.594-88.594c-2.0781-2.0781-5.5781-2.0781-7.7656 0-1.4219 1.4219-1.6406 3.0625-1.6406 3.8281 0 0.875 0.21875 2.5156 1.6406 3.8281z" />
                  <path d="m296.73 86.953c1.4219-1.4219 1.6406-3.0625 1.6406-3.8281 0-0.875-0.21875-2.5156-1.6406-3.8281-2.0781-2.0781-5.5781-2.0781-7.7656 0l-88.594 88.594h15.422z" />
                  <path d="m564.7 189.77h-429.41c-18.047 0-32.812 14.766-32.812 32.812v4.9219c0 18.047 14.766 32.812 32.812 32.812h429.41c18.047 0 32.812-14.766 32.812-32.812v-4.9219c0-18.047-14.766-32.812-32.812-32.812z" />
                  <path d="m350 422.73c39.812-16.297 53.703-43.422 49.656-63.438-2.5156-11.812-10.5-18.922-21.438-18.922-6.5625 0-14.438 2.9531-21.984 8.2031-3.8281 2.625-8.8594 2.625-12.578-0.10938-7.6562-5.4688-15.312-8.4219-22.094-8.4219-10.938 0-18.812 7.1094-21.219 19.141-4.0469 20.344 9.7344 47.688 49.656 63.547z" />
                  <path d="m175.55 454.34c2.4062 15.969 16.297 28 32.484 28h284.05c16.188 0 30.078-12.031 32.484-28l25.375-172.16h-399.88zm103.36-99.422c4.375-22.312 21.219-36.641 42.656-36.641 9.4062 0 19.031 2.8438 28.547 8.4219 9.4062-5.3594 19.031-8.0938 28.219-8.0938 21.328 0 38.172 14.219 42.766 36.312v0.10938c6.0156 29.422-12.031 68.469-65.625 89.141-0.21875 0.10938-0.4375 0.10938-0.65625 0.21875-1.6406 0.54688-3.2812 0.76562-4.9219 0.76562s-3.1719-0.21875-4.9219-0.76562c-0.21875-0.10938-0.32812-0.10938-0.54688-0.21875-53.484-20.344-71.422-59.5-65.516-89.25z" />
                </g>
              </svg>
            </button>
          ) : (
            <button
              className="flex flex-col-reverse items-center justify-center leading-snug text-gray-900 hover:no-underline"
              onClick={() => removeFromCart(pet)}
            >
              Remove
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-12 h-12 fill-slate-900 hover:scale-110 duration-300"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="50 100 600 400"
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="m484.2 167.89h15.422l-88.594-88.594c-2.0781-2.0781-5.5781-2.0781-7.7656 0-1.4219 1.4219-1.6406 3.0625-1.6406 3.8281 0 0.875 0.21875 2.5156 1.6406 3.8281z" />
                  <path d="m296.73 86.953c1.4219-1.4219 1.6406-3.0625 1.6406-3.8281 0-0.875-0.21875-2.5156-1.6406-3.8281-2.0781-2.0781-5.5781-2.0781-7.7656 0l-88.594 88.594h15.422z" />
                  <path d="m564.7 189.77h-429.41c-18.047 0-32.812 14.766-32.812 32.812v4.9219c0 18.047 14.766 32.812 32.812 32.812h429.41c18.047 0 32.812-14.766 32.812-32.812v-4.9219c0-18.047-14.766-32.812-32.812-32.812z" />
                  <path
                    fill="red"
                    d="m350 422.73c39.812-16.297 53.703-43.422 49.656-63.438-2.5156-11.812-10.5-18.922-21.438-18.922-6.5625 0-14.438 2.9531-21.984 8.2031-3.8281 2.625-8.8594 2.625-12.578-0.10938-7.6562-5.4688-15.312-8.4219-22.094-8.4219-10.938 0-18.812 7.1094-21.219 19.141-4.0469 20.344 9.7344 47.688 49.656 63.547z"
                  />
                  <path d="m175.55 454.34c2.4062 15.969 16.297 28 32.484 28h284.05c16.188 0 30.078-12.031 32.484-28l25.375-172.16h-399.88zm103.36-99.422c4.375-22.312 21.219-36.641 42.656-36.641 9.4062 0 19.031 2.8438 28.547 8.4219 9.4062-5.3594 19.031-8.0938 28.219-8.0938 21.328 0 38.172 14.219 42.766 36.312v0.10938c6.0156 29.422-12.031 68.469-65.625 89.141-0.21875 0.10938-0.4375 0.10938-0.65625 0.21875-1.6406 0.54688-3.2812 0.76562-4.9219 0.76562s-3.1719-0.21875-4.9219-0.76562c-0.21875-0.10938-0.32812-0.10938-0.54688-0.21875-53.484-20.344-71.422-59.5-65.516-89.25z" />
                </g>
              </svg>
            </button>
          )}
        </div>

        <div className="flex items-center justify-start mb-2">
          <span className="mr-3 text-lg font-bold text-gray-900">
            {`${pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)} `}
          </span>
          <span className="text-lg  text-gray-900">
            <span className="font-bold text-lg">Age: </span>
            {pet.age}
          </span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-md text-gray-900">
            <span className="font-bold">Adoption Fee: </span>${pet.fee}
          </span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm  text-gray-900">
            <span className="font-medium"> Days on Site: </span>
            {`${Math.floor(
              (Date.now() - +new Date(pet.dateAddedToSite)) /
                (1000 * 60 * 60 * 24)
            )}`}
          </span>
        </div>
        <div className="flex items-center justify-start mb-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Link
              to={`/pets/?species=${pet.species}`}
              className="inline-flex items-center mr-3 px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-800"
            >
              {"More " + multipleSpeciesStringConverter(pet.species)}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </Link>
          </button>
          <Link
            to={`/pet/${pet._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {"Meet " + pet.name}
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </li>
  );
};
