const app = require("./app");

const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Lisenting on ${port}.`));
