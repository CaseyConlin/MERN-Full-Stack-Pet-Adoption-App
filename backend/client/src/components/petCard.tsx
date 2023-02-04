import { Link } from "react-router-dom";
import { multipleSpeciesStringConverter } from "./helpers";
export const PetCard = ({ pets }: { pets: Pet[] }) => {
  return (
    <>
      {pets.map((pet: Pet) => (
        <li
          key={pet._id}
          className="max-w-sm md:w-2/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Link to={`/pet/${pet._id}`}>
            <img
              className="rounded-t-lg"
              src={`/uploads/${pet.image}`}
              alt={pet.species + " for adoption."}
            />
          </Link>
          <div className="p-3">
            <Link to={`/pet/${pet._id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {pet.name}
              </h5>
            </Link>

            <div className="flex items-center justify-start mb-2">
              <span className="mr-3 text-lg font-bold text-gray-900 dark:text-white">
                {`${pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)} `}
              </span>
              <span className="text-lg  text-gray-900 dark:text-white">
                <span className="font-bold text-lg">Age: </span>
                {pet.age}
              </span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-md text-gray-900 dark:text-white">
                <span className="font-bold">Adoption Fee: </span>${pet.fee}
              </span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm  text-gray-900 dark:text-white">
                <span className="font-medium"> Days on Site: </span>
                {`${Math.floor(
                  (Date.now() - +new Date(pet.dateAddedToSite)) /
                    (1000 * 60 * 60 * 24)
                )}`}
              </span>
            </div>
            <div className="flex items-center justify-start mb-2">
              <Link
                to={`/pets/?species=${pet.species}`}
                className="inline-flex items-center mr-3 px-3 py-2 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {"More " + multipleSpeciesStringConverter(pet.species)}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
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
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};
