import { Link } from "react-router-dom";
import { multipleSpeciesStringConverter } from "../helpers";
export const CarouselItem = (pet: CarouselPet) => {
  return (
    <div
      key={pet._id}
      className=" w-full sm:11/12 md:w-11/12 md:mx-2 lg:mx-3 xl:mx-3.5 shrink-0 bg-white border border-gray-200 rounded-lg shadow"
    >
      <Link
        to={`/pet/${pet._id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          className="w-full rounded-t-lg"
          src={`/uploads/${pet.image}`}
          alt="placeholder"
        />
      </Link>
      <div className="px-2 py-2 mb-3">
        <div className="flexitems-center mb-1 ml-2">
          <Link
            to={`/pet/${pet._id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <h5 className=" text-xl mb-2 font-bold tracking-tight text-gray-900">
              {pet.name}
            </h5>
          </Link>
        </div>
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Link
              to={`/pets/?species=${pet.species}`}
              className="inline-flex items-center ml-2 px-2 py-1 text-xs font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-800"
            >
              {"More " + multipleSpeciesStringConverter(pet.species)}
              <svg
                aria-hidden="true"
                className="w-3 h-3 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
