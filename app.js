const express = require("express");
const axios = require("axios");
const cors = require("cors");

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

const cookieParser = require("cookie-parser");

const morgan = require("morgan");

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to Automatted Water Management System" });
});

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

module.exports = app;
