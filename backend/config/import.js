const fs = require("fs");
const express = require("express");
const connectDB = require("./db");
const Pet = require("../models/petModel");

connectDB();

//read json file

const pets = JSON.parse(
  fs.readFileSync(`${__dirname}/sample-data.json`, "utf-8")
);

//import data to db

const importData = async () => {
  try {
    await Pet.create(pets);
    console.log("Data successfully loaded");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

//delete dataa from collection

const deleteData = async () => {
  try {
    await Pet.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};
// deleteData();

// importData();
