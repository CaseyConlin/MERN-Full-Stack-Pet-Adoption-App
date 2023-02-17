const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userController = require("../controllers/userController");

dotenv.config({ path: "../../config/config" });

const User = require("../models/userModel");

router.route("/register").post(userController.registration);

router.route("/login").post(userController.login);

router.route("/isUserAuth").get(userController.userAuth);

router.route("/logout").get(userController.logout);

module.exports = router;
