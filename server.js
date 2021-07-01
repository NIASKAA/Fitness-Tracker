const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const workoutRoutes = require("./routes/workoutRoute.js");
const homeRoutes = require("./routes/homeRoute.js")

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_KEY, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(homeRoutes);
app.use(workoutRoutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});