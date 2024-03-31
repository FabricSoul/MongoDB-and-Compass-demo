const express = require("express");
const pug = require("pug");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(mongodb_uri);

const app = express();
const port = process.env.PORT;

app.set("view engine", "pug");
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const userRoutes = require("./routes/index.router");
app.use("/", userRoutes);
