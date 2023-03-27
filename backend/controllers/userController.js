const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config" });

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
  dbUser.save(
    res
      .status(200)
      .json({ message: `User ${user.username} successfully created.` })
  );
};

exports.login = async (req, res) => {
  const userLoggingIn = req.body;

  const dbUser = await User.findOne({ email: userLoggingIn.email });
  if (!dbUser) {
    return res.status(400).json({
      message: "Username not recognized.",
    });
  }
  const isCorrect = await bcrypt.compare(
    userLoggingIn.password,
    dbUser.password
  );
  if (isCorrect) {
    const payload = {
      _id: dbUser._id,
      username: dbUser.username,
      email: dbUser.email,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
      (err, token) => {
        if (err) return res.status(401).json({ message: "Invalid password." });

        return res.status(200).cookie("token", token, { httpOnly: true }).json({
          message: "User login successful.",
          user: payload,
        });
      }
    );
  } else {
    return res.status(401).json({
      message: "Invalid username or password.",
    });
  }
};

exports.userAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "You are not logged in, please log in",
    });
  }
  await jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res
        .status(401)
        .clearCookie("token")
        .json({ message: "User session expired." });
    }
    return res.status(200).json({
      user: {
        _id: decoded._id,
        username: decoded.username,
        email: decoded.email,
      },
      message: "Success.",
    });
  });
};
// const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
// return await res.status(200).json({ user: decoded, message: "success" });

exports.logout = async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "You have been logged out." });
};
