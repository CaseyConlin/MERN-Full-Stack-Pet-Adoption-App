import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import CartContext from "../../context/cartContext/cartContext";
import { multipleSpeciesStringConverter } from "../helpers";

export const PetPage = () => {
  const pet = useLoaderData() as Pet;

  const [showAdoption, setShowAdoption] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

  const isInCart = (pet: Pet) => {
    return !!cartItems.find((item: Pet) => item._id === pet._id);
  };

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full rounded-lg"
          src={`/uploads/${pet.image}`}
          alt={pet.species + " for adoption."}
        />
      </div>
      <div className="md:hidden">
        <img
          className="w-full"
          src={`/uploads/${pet.image}`}
          alt={pet.species + " for adoption."}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            {multipleSpeciesStringConverter(pet.species)}
          </p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            {pet.name}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Age: {pet.age}</p>
          <div className="flex items-center justify-center"></div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">
            {" "}
            {`${pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)} `}
          </p>
          <div className="flex items-center justify-center"></div>
        </div>
        {!isInCart(pet) ? (
          <button
            onClick={() => addToCart(pet)}
            className="
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
						hover:bg-gray-900
					"
          >
            <svg
              className="mr-3"
              width="25"
              height="25"
              viewBox="0 0 512 525"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M191.4,164.127c29.081-9.964,44.587-41.618,34.622-70.699c-9.952-29.072-41.6-44.592-70.686-34.626   c-29.082,9.956-44.588,41.608-34.632,70.69C130.665,158.582,162.314,174.075,191.4,164.127z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M102.394,250.767v0.01c16.706-25.815,9.316-60.286-16.484-76.986c-25.81-16.691-60.273-9.316-76.978,16.489   v0.01c-16.695,25.805-9.306,60.268,16.495,76.958C51.236,283.957,85.694,276.573,102.394,250.767z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M320.6,164.127c29.086,9.948,60.734-5.545,70.695-34.636c9.956-29.081-5.55-60.734-34.631-70.69   c-29.086-9.966-60.734,5.555-70.686,34.626C276.013,122.509,291.519,154.163,320.6,164.127z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M256,191.489c-87.976,0-185.048,121.816-156.946,208.493c27.132,83.684,111.901,49.195,156.946,49.195   c45.045,0,129.813,34.489,156.945-49.195C441.048,313.305,343.976,191.489,256,191.489z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M503.068,190.289v-0.01c-16.705-25.805-51.166-33.18-76.976-16.489c-25.801,16.7-33.19,51.171-16.486,76.986   v-0.01c16.7,25.806,51.158,33.19,76.968,16.481C512.374,250.557,519.764,216.095,503.068,190.289z"
                />
              </g>
            </svg>
            Add {pet.name} to Basket
          </button>
        ) : (
          <button
            onClick={() => removeFromCart(pet)}
            className="
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
          hover:bg-gray-900
        "
          >
            <svg
              className="mr-3"
              width="25"
              height="25"
              viewBox="0 0 512 525"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M191.4,164.127c29.081-9.964,44.587-41.618,34.622-70.699c-9.952-29.072-41.6-44.592-70.686-34.626   c-29.082,9.956-44.588,41.608-34.632,70.69C130.665,158.582,162.314,174.075,191.4,164.127z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M102.394,250.767v0.01c16.706-25.815,9.316-60.286-16.484-76.986c-25.81-16.691-60.273-9.316-76.978,16.489   v0.01c-16.695,25.805-9.306,60.268,16.495,76.958C51.236,283.957,85.694,276.573,102.394,250.767z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M320.6,164.127c29.086,9.948,60.734-5.545,70.695-34.636c9.956-29.081-5.55-60.734-34.631-70.69   c-29.086-9.966-60.734,5.555-70.686,34.626C276.013,122.509,291.519,154.163,320.6,164.127z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M256,191.489c-87.976,0-185.048,121.816-156.946,208.493c27.132,83.684,111.901,49.195,156.946,49.195   c45.045,0,129.813,34.489,156.945-49.195C441.048,313.305,343.976,191.489,256,191.489z"
                />
                <path
                  stroke="white"
                  strokeWidth="25"
                  d="M503.068,190.289v-0.01c-16.705-25.805-51.166-33.18-76.976-16.489c-25.801,16.7-33.19,51.171-16.486,76.986   v-0.01c16.7,25.806,51.158,33.19,76.968,16.481C512.374,250.557,519.764,216.095,503.068,190.289z"
                />
              </g>
            </svg>
            Remove {pet.name} from Basket
          </button>
        )}
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 my-5">
            {pet.description}
          </p>
          <p className="text-base leading-4 mt-7 text-gray-600">
            <span className="font-semibold">Adoption Fee:</span> ${pet.fee}
          </p>
          <p className="text-base md:w-96 leading-4 mt-4 text-gray-600">
            <span className="font-semibold">Location:</span> {pet.town}{" "}
            {pet.zip}
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            <span className="font-semibold">Days on petConnect: </span>
            {`${Math.floor(
              (Date.now() - +new Date(pet.dateAddedToSite)) /
                (1000 * 60 * 60 * 24)
            )}`}
          </p>
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShowAdoption(!showAdoption)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Adoption</p>
              <button
                className="
									cursor-pointer
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={
                    "transform " + (showAdoption ? "rotate-180" : "rotate-0")
                  }
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (showAdoption ? "block" : "hidden")
              }
              id="sect"
            >
              With more adoptable pets than ever, there is an urgent need for
              pet adopters. Consider making this pet part of your family.
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShowContact(!showContact)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
									cursor-pointer
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={
                    "transform " + (showContact ? "rotate-180" : "rotate-0")
                  }
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (showContact ? "block" : "hidden")
              }
              id="sect"
            >
              This isn't a real pet site. This is a demonstration project. But
              adopting a pet is a wonderful thing and can bring a lot of joy to
              you and your pet. Consider visting your local SPCA or{" "}
              <a
                className="text-blue-800"
                href="https://www.petfinder.com/"
                rel="noreferrer"
                target="_blank"
              >
                PetFinder
              </a>{" "}
              to find your next best buddy. For questions about the app{" "}
              <a className="text-blue-800" href="mailto:casey.conlin@gmail.com">
                contact Casey
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
