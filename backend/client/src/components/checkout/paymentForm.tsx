import { useState, useContext } from "react";
import CartContext from "../../context/cartContext/cartContext";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const [billedAmount, setBilledAmount] = useState<string | undefined>();

  const stripe = useStripe();
  const elements = useElements();

  const { total, handleCheckout } = useContext(CartContext);

  const stripeTotal = total * 100;

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(undefined);

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const transaction = { amount: stripeTotal, id };
        const response = await fetch("/payment/stripe", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(transaction),
        });

        const data = await response.json();
        if (data.success) {
          setSuccessMessage("Payment successul.");
          setSuccess(true);
          handleCheckout();
          setBilledAmount(
            (data.amount / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          );
        }
        if (!data.success) {
          console.log(data.message);
          setError(data.message);
          setSuccess(false);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      setError(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <div className="my-5 flex flex-col items-center ">
          <form onSubmit={handleSubmit}>
            <div className="px-3 mx-auto md:w-10/12">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                <div className="w-full p-3 border-b border-gray-200">
                  <div className="font-bold text-slate-800 my-3 text-xl">
                    Basket Total:
                    <span className="font-semibold "> ${total}</span>
                  </div>
                  <div className="my-5">
                    <label
                      htmlFor="type1"
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-slate-800"
                        name="type"
                        id="type1"
                        defaultChecked
                      />
                      <img
                        src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                        className="h-6 ml-3"
                        alt="Credit card logos."
                      />
                    </label>
                  </div>
                  <div>
                    <div className="text-gray-600 font-bold text-lg mb-1">
                      Payment Info
                    </div>
                    {error && (
                      <div
                        className="bg-red-100 text-center rounded-lg py-3 px-6 my-4 text-base text-red-700 mb-3"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                    {successMessage && (
                      <div
                        className="bg-red-100 text-center rounded-lg py-3 px-6 my-4 text-base text-red-700 mb-3"
                        role="alert"
                      >
                        {successMessage}
                      </div>
                    )}
                    <div className="mb-3">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Name on card
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none "
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Card number
                      </label>

                      <div>
                        <CardNumberElement className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none " />
                      </div>
                      <p className="mt-2 text-sm text-blue-600 dark:text-green-500">
                        For checkout use mock card #
                      </p>
                      <p className="mt-0 ml-2 text-sm text-blue-600 dark:text-green-500">
                        <span className="font-medium">
                          {" "}
                          4242 4242 4242 4242
                        </span>
                      </p>
                    </div>
                    <div className="mb-3 flex content-start">
                      <div className=" w-2/5">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Expiration date
                        </label>
                        <CardExpiryElement className="form-select w-4/5 px-2 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none  cursor-pointer" />
                        <p className="mt-2 text-sm text-blue-600 dark:text-green-500">
                          Mock exp. <span className="font-medium">future</span>
                        </p>
                      </div>
                      <div className=" w-2/5 mb-3">
                        <div className=" w-full mb-3">
                          <label className="text-gray-600 font-semibold text-sm w-4/5 mb-2 mr-2 ">
                            Security code
                          </label>
                          <div>
                            <CardCvcElement className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none " />
                          </div>
                          <p className="mt-2 text-sm text-blue-600 dark:text-green-500">
                            Mock CVC <span className="font-medium"> 424</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-600 font-bold text-lg mb-1">
                      Delivery Info
                    </div>
                    <div className="mb-3">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Street Address
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none "
                          placeholder="123 Main St."
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        City
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none "
                          placeholder="Hamsterdam"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3 flex flex-row">
                      <div className="flex flex-col">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          State
                        </label>
                        <div>
                          <input
                            className="w-3/5 px-3 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none "
                            placeholder="NY"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          ZIP
                        </label>
                        <div>
                          <input
                            className="w-4/5 px-3 py-2 mb-1 border border-gray-200 rounded-lg focus:outline-none "
                            placeholder="12345"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="block w-full max-w-xs mx-auto bg-slate-600 hover:bg-slate-800 focus:bg-slate-800 text-white rounded-lg px-3 py-2 font-semibold">
                  <i className="mdi mdi-lock-outline mr-1"></i> Pay Now
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="my-5 flex flex-col items-center">
          <h2 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
            Thank you for your patronage
          </h2>
          <h3 className="bg-green-100 text-center rounded-lg py-3 px-6 my-4 text-xl font-bold text-green-700 mb-3">
            Payment of {billedAmount} successful.
          </h3>
        </div>
      )}
    </>
  );
};
