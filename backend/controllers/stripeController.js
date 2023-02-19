const dotenv = require("dotenv");
dotenv.config({ path: "../config/config" });

const stripe = require("stripe")(
  "sk_test_51MdBykIO8F8dxGSbydIYUr45AsEbObTbJH07UUxOLu8o8F7Nlu41d4sp43Cx3y1sBGMmAXoAU9bP02fiNM0Zu5U000gZ109S0m"
);

exports.payment = async (req, res) => {
  const { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Payment",
      payment_method: id,
      confirm: true,
    });

    console.log("Payment", payment);
    res.json({
      message: "Payment was successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
};
