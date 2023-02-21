const express = require("express");

// const connectDB = require("./config/db");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const petRouter = require("./routes/petsRoutes");
const userRouter = require("./routes/usersRoutes");
const stripeRouter = require("./routes/stripeRoutes");

const app = express();
const path = require("path");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

app.use(cors({ origin: true, credentials: true }));

app.use(cookieParser());

app.use(express.json());

// Serve static files from the React app.
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//API Routes
app.get("/", (req, res) => res.send("The server is online."));
app.use("/api/v1/pets", petRouter);
app.use("/users", userRouter);
app.use("/payment", stripeRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = app;
