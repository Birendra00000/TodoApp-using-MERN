const express = require("express");
const { connectDatabase } = require("./database");
const app = express();
const cors = require("cors");
require("dotenv").config();

//for using API in frontend
// Allow requests from http://localhost:3000
// app.use(cors({ origin: "http://localhost:3000/" }));
// CORS Configuration

// CORS Configuration
const allowedOrigins = [
  "https://todo-mern-drab-one.vercel.app",
  "http:localhost:3000",
];
const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: "http://todo-mern-drab-one.vercel.app", // Ensure this matches your frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

//json parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//We are getting a port number from .env
const PORT = process.env.PORT || 5000;

//For connecting data we are invoking a function
connectDatabase(process.env.MONGO_URL);

// // telling nodejs to give access to uploads folder
app.use(express.static("./uploads"));

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
