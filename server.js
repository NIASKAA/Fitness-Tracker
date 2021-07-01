const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const workoutRoutes = require("./routes/workoutRoutes");
const homeRoutes = require("./routes/homeRoutes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_KEY || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(homeRoutes);
app.use(workoutRoutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});