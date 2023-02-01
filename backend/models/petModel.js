const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the pet's name."],
  },
  species: {
    type: String,
    required: [
      true,
      "Please provide a pet type that matches dog, cat, rat, chicken, or bunny.",
    ],
    enum: ["dog", "cat", "rat", "chicken", "bunny"],
  },
  age: {
    type: Number,
    required: [true, "Please provide this pet's approximate age."],
  },
  fee: {
    type: Number,
    required: [true, "Please provide this pet's approximate age."],
  },
  description: {
    type: String,
    required: [true, "Please provide a bio and description for this pet."],
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
    required: [true, "Please select male or female"],
    enum: ["male", "female"],
  },
  dateAddedToSite: {
    type: Date,
    default: Date.now,
  },
  zip: Number,
  town: String,
});

module.exports = Pet = mongoose.model("pet", PetSchema);
