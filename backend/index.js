const express = require("express");
const { connectDatabase } = require("./database");
const app = express();
require("dotenv").config();
const cors = require("cors");

//for using API in frontend
// Allow requests from http://localhost:3000
app.use(cors({ origin: "http://localhost:3001" }));

//json parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//We are getting a port number from .env
const PORT = process.env.PORT;

//For connecting data we are invoking a function
connectDatabase(process.env.MONGO_URL);

//Routes API

const UserRoutes = require("./router/userRoutes");
const TodoRoutes = require("./router/todoRoute");

app.use("/api", UserRoutes);
app.use("/api", TodoRoutes);

// Define route for homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Homepage!</h1>");
});

app.listen(PORT, () => {
  console.log(`The PORT is running at ${PORT}`);
});
