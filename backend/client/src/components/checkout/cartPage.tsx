import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext/cartContext";
import { CartItem } from "./cartItem";
import { CheckoutCard } from "./checkoutCard";
export const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="container mx-auto">
      <h1 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
        Your Basket
      </h1>
      <div className="flex flex-col sm:flex-row mx-auto justify-start space-evenly sm:align-start gap-5  justify-evenly ">
        <ul className="flex md:w-3/6 flex-col divide-y px-4 md:p-0 divide-gray-700 p-5 bg-white border border-gray-200 rounded-lg shadow">
          {cartItems.length !== 0 ? (
            cartItems.map((pet: CartPet) => (
              <CartItem
                key={pet._id}
                species={pet.species}
                _id={pet._id}
                name={pet.name}
                fee={pet.fee}
                image={pet.image}
                gender={pet.gender}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center my-4">
              <h3 className="text-center mb-4">
                There are currently no pets in your cart.
              </h3>
              <Link
                to={`/pets`}
                className="inline-flex items-center px-3 py-2 text-2xl font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 hover:no-underline"
              >
                <button
                  className="
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
                  Find Pets!
                </button>
              </Link>
              <div className="my-3 lg:my-5 lg:w-5/6 mx-auto md:mb-0">
                <img
                  src={`/uploads/cart-no-pets.jpg`}
                  className="w-full rounded-lg"
                  alt="dog with treat"
                />
              </div>
            </div>
          )}
        </ul>
        <CheckoutCard />
      </div>
    </div>
  );
};
