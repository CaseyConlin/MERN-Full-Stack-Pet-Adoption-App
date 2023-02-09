const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../../config/config" });

const User = require("../../models/userModel");

router.post("/register", async (req, res) => {
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
});

router.post("/login", (req, res) => {
  const userLoggingIn = req.body;

  User.findOne({ username: userLoggingIn.username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({
        message: "Invalid username or password.",
      });
    }
    bcrypt
      .compare(userLoggingIn.password, dbUser.password)
      .then((isCorrect) => {
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
              if (err) return res.json({ message: err });
              return res.json({
                message: "User account successfully created.",
                token: "Bearer " + token,
              });
            }
          );
        } else {
          return res.json({
            message: "Invalid username or password.",
          });
        }
      });
  });
});

function verifyJWT(req, res, next) {
  // removes 'Bearer` from token
  const token = req.headers["x-access-token"]?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed To Authenticate",
        });
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      req.user.pfp = decoded.pfp;
      next();
    });
  } else {
    res.json({ message: "Incorrect Token Given", isLoggedIn: false });
  }
}

router.get("/isUserAuth", verifyJWT, (req, res) => {
  return res.json({ isLoggedIn: true, username: req.user.username });
});

module.exports = router;
