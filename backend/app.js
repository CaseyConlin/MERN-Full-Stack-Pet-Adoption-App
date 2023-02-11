const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const cors = require("cors");

const petRouter = require("./routes/petsRoutes");
const userRouter = require("./routes/usersRoutes");

const app = express();

const path = require("path");

connectDB();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

// Serve static files from the React app.
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => res.send("The server is online."));

app.use("/api/v1/pets", petRouter);

app.use("/users", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Lisenting on ${port}.`));
