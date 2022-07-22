require("dotenv").config();

const express = require("express");
const personRouter = require("./routes/personRouter");
const carRouter = require("./routes/carRouter");
const postgres = require("./db/postgres");
const Person = require("./models/personSchema");
const Car = require("./models/carSchema");

const app = express();

app.use(express.json());

app.use("/person", personRouter);
app.use("/car", carRouter);

Person.hasOne(Car, {
  foreignKey: "person_id",
});

postgres.sync();

app.listen(5000, () => {
  console.log("Server is running");
});
