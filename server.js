const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRoutes = require("./routes/apiRoute.js");
const htmlRoutes = require("./routes/htmlRoute.js")

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

app.use(htmlRoutes);
app.use(apiRoutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});