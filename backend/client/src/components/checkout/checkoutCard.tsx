import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext/cartContext";

export const CheckoutCard = () => {
  const { total, itemCount } = useContext(CartContext);

  return (
    <div className="flex flex-col text-center sm:justify-self-start mx-auto  content-center   max-w-sm md:w-2/5 ">
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow">
        <div className="mb-4">
          <p className="font-bold my-1 text-xl">
            Basket Total:
            <span className="font-semibold "> ${total}</span>
          </p>
          <p className="text-md ">Includes adoption fee for each pet.</p>
        </div>
        <div className=" ">
          <p className="font-bold my-1 text-md">
            Number of Pets:
            <span className="font-semibold "> {itemCount}</span>
          </p>
          <p className="text-sm ">You can add or remove pets from your cart.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-5 my-5 lg:gap-y-2 ">
          <button type="button" className="justify-self-stretch">
            <Link
              className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 no-underline hover:no-underline"
              to={`/pets`}
            >
              Back to Pets
            </Link>
          </button>
          {itemCount ? (
            <button type="button" className="align-self-stretch">
              <Link
                className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 no-underline hover:no-underline"
                to={`/checkout`}
              >
                Checkout
              </Link>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
