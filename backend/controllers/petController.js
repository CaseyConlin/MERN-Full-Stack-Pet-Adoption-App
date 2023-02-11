const express = require("express");
const { countDocuments } = require("../models/petModel");
const router = express.Router();

const Pet = require("../models/petModel");

router.get("/test", (req, res) => {
  res.send("Pet route testing.");
});

// Get and filter pets.
exports.filterPets = async (req, res) => {
  //Build query.

  //Basic filtering.
  const queryObject = { ...req.query };

  const excludedFields = ["page", "sort", "limit"];
  excludedFields.forEach((field) => {
    delete queryObject[field];
  });

  //Advanced filter for greater than and less than queries.
  let queryString = JSON.stringify(queryObject);

  queryString = queryString.replace(
    /\b(gt|gte|lt|lte)\b/g,
    (match) => `$${match}`
  );

  let query = Pet.find(JSON.parse(queryString));

  // Sort results.
  if (req.query.sort) {
    query = query.sort(req.query.sort);
  }

  const totalQueryPets = await Pet.countDocuments(query);

  //Pagination of results.
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 6;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  if (req.query.page) {
    const totalPets = await Pet.countDocuments;
    if (skip > totalPets) throw new Error("We don't have that many pets...");
  }
  //Execute query
  const pets = await query;

  //Send Response
  res.status(200).json({ data: pets, totalPetsResults: totalQueryPets });

  // .catch((err) =>
  //   res.status(404).json({ noPetsFound: "No pets were found." })
  // );
};

//Get pet by id.
exports.getPet = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  res.status(200).json(pet);
  // .catch((err) =>
  //   req.status(404).json({ noPetFound: "We can't find that pet..." })
  // );
};

//Add/save a pet.
// router.post("/", (req, res) => {
//   Pet.create(req.body)
//     .then(console.log(req.body))
//     .then((pet) => res.json({ msg: "Pet was added successfully." }))
//     .catch((err) => res.status(400).json({ error: "Unable to add pet." }));
// });

//Update a pet.
// router.put("/:id", (req, res) => {
//   Pet.findByIdAndUpdate(req.params.id, req.body)
//     .then((pet) => res.status(200).json({ msg: "Updated successfully." }))
//     .catch((err) =>
//       res.status(400).json({ error: "Unable to update the database." })
//     );
// });

//Delete a pet.
// router.delete("/:id", (req, res) => {
//   Pet.findByIdAndRemove(req.params.id, req.body)
//     .then((pet) => res.status(200).json({ msg: "Pet deleted successfully." }))
//     .catch((err) => res.status(404).json({ error: "No such pet to delete." }));
// });
