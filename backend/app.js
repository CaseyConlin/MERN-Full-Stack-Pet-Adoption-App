const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const petRouter = require("./routes/api/pets");

const app = express();

const path = require("path");

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => res.send("The server is online."));

app.use("/api/v1/pets", petRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Lisenting on ${port}.`));
