const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET);

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

    res.json({
      message: "Payment was successful",
      success: true,
      amount,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
