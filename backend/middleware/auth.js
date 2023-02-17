const jwt = require("jsonwebtoken");
const dotnev = require("dotenv").config();
dotenv.config({ path: "../config/config" });

module.exports = (req, res, next) => {
  // Read the token from the cookie
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    // console.log("err", er);
    //Incase of expired jwt or invalid token kill the token and clear the cookie
    res.clearCookie("token");
    return res.status(400).send(err.message);
  }
};
