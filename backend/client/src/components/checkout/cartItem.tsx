import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext/cartContext";

export const CartItem = (pet: CartPet) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32"
          src={`/uploads/${pet.image}`}
          alt={pet.species + " for adoption."}
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <Link
                className="no-underline hover:no-underline "
                to={`/pet/${pet._id}`}
              >
                <h3 className=" text-slate-700 hover:text-slate-800 text-xl font-semibold leading-snug sm:pr-8">
                  {pet.name}
                </h3>
              </Link>
              <p className="text-sm">
                {pet.species.charAt(0).toUpperCase() + pet.species.slice(1)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium">${pet.fee}</p>
              <p className="text-sm">
                {pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)}
              </p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              type="button"
              onClick={() => removeFromCart(pet)}
              className="flex items-center px-2 py-1 pl-0 space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="50 100 600 400"
                className="w-6 h-6 fill-current"
              >
                <g>
                  <path d="m484.2 167.89h15.422l-88.594-88.594c-2.0781-2.0781-5.5781-2.0781-7.7656 0-1.4219 1.4219-1.6406 3.0625-1.6406 3.8281 0 0.875 0.21875 2.5156 1.6406 3.8281z" />
                  <path d="m296.73 86.953c1.4219-1.4219 1.6406-3.0625 1.6406-3.8281 0-0.875-0.21875-2.5156-1.6406-3.8281-2.0781-2.0781-5.5781-2.0781-7.7656 0l-88.594 88.594h15.422z" />
                  <path d="m564.7 189.77h-429.41c-18.047 0-32.812 14.766-32.812 32.812v4.9219c0 18.047 14.766 32.812 32.812 32.812h429.41c18.047 0 32.812-14.766 32.812-32.812v-4.9219c0-18.047-14.766-32.812-32.812-32.812z" />
                  <path d="m175.55 454.34c2.4062 15.969 16.297 28 32.484 28h284.05c16.188 0 30.078-12.031 32.484-28l25.375-172.16h-399.88zm137.16-83.562h74.484c6.0156 0 10.938 4.9219 10.938 10.938s-4.9219 10.938-10.938 10.938h-74.484c-6.0156 0-10.938-4.9219-10.938-10.938s4.9219-10.938 10.938-10.938z" />
                </g>
              </svg>
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
