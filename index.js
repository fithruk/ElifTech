require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const evenstRout = require("./routes/eventsRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,

    methods: ["GET", "POST", "DELETE"],
  })
);

app.use("/", evenstRout);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CLIENT);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();

module.exports = app;
