const express = require("express");
const { connectDatabase } = require("./database");
const app = express();
const cors = require("cors");
require("dotenv").config();

//for using API in frontend

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`The PORT is running at ${PORT}`);
});
