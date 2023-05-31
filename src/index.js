const express = require("express");
const app = express();
var authenRouter = require("../src/router/authen.router");
var carzRouter = require("../src/router/carz.router");
const mongoose = require("mongoose");
const port = 3000;
var config = require("../config");
var dbUrl = config.dbUrl;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.use("/authen", authenRouter);
app.use("/api", carzRouter);

app.use(express.json());
app.get("*", (req, res) => {
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
