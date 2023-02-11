const { promisify } = require("util");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../config/config" });

const User = require("../models/userModel");

exports.registration = async (req, res) => {
  const user = req.body;

  const takenUsername = await User.findOne({ username: user.username });
  const takenEmail = await User.findOne({ email: user.email });

  if (takenUsername || takenEmail) {
    return res
      .status(400)
      .json({ message: "Username or email is not available." });
  } else user.password = await bcrypt.hash(req.body.password, 10);
  const dbUser = new User({
    username: user.username.toLowerCase(),
    email: user.email.toLowerCase(),
    password: user.password,
  });
  dbUser.save(res.status(200).json({ message: "User successfully saved." }));
};

exports.login = async (req, res) => {
  const userLoggingIn = req.body;

  const dbUser = await User.findOne({ username: userLoggingIn.username });
  if (!dbUser) {
    return res.status(400).json({
      message: "Invalid username or password.",
    });
  }
  const isCorrect = await bcrypt.compare(
    userLoggingIn.password,
    dbUser.password
  );
  if (isCorrect) {
    const payload = {
      id: dbUser._id,
      username: dbUser.username,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 86400 },
      (err, token) => {
        if (err) return res.status(400).json({ message: err });
        return res.status(200).json({
          message: "User successfully logged in.",
          token: "Bearer " + token,
        });
      }
    );
  } else {
    return res.status(400).json({
      message: "Invalid username or password.",
    });
  }
};

exports.userAuth = async (req, res, next) => {
  const token = req.headers["x-access-token"]?.split(" ")[1];
  if (!token) {
    return res.json({
      isLoggedIn: false,
      message: "You are not logged in, please log in",
    });
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  return res.json({ isLoggedIn: true, username: decoded.username });
};
