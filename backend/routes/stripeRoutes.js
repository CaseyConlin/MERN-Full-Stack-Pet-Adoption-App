const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const stripeController = require("../controllers/stripeController");

dotenv.config({ path: "../../config/config" });

router.route("/stripe").post(stripeController.payment);

module.exports = router;
