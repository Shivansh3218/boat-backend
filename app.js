var express = require("express");
var mongoose = require("mongoose");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const routes = require("./routes"); // Import the routes file directly

app.use(cors());

const connect = () => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(
    "mongodb+srv://boat123:boat123@cluster0.zcqewyi.mongodb.net/?retryWrites=true&w=majority"
  );
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use the routes
app.use("/api", routes); // Mount all routes under /api

app.listen(3000, async () => {
  try {
    await connect();
    console.log("Server running on port 3000");
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
});
