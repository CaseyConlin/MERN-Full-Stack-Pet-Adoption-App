import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "./paymentForm";

const stripePromise = loadStripe(
  "pk_test_51MdBykIO8F8dxGSbIJBFoLnrGV0jArt4oogjA6JqUuoAxWecApAoO2Pw58hHVarM3vyl6vgQZm44KuhZ1z9zuTLT00IznQpC8a"
);
export const StripeComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};
