const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes.js");
const connectDb = require("./config/dbConnection.js");
const cors = require("cors");

if (process.env.NODE_EVN != "production") {
  require("dotenv").config();
}

// Create an Express application
const app = express();

const PORT = process.env.PORT || 3001;

// Parse incoming request bodies
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

connectDb();

app.use("/api", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
