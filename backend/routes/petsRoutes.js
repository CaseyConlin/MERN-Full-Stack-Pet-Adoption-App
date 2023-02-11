const express = require("express");
const { countDocuments } = require("../models/petModel");
const router = express.Router();
const petController = require("../controllers/petController");

router.get("/test", (req, res) => {
  res.send("Pet route testing.");
});

// Get and filter pets.
router.route("/").get(petController.filterPets);

//Get pet by id.
router.route("/:id").get(petController.getPet);

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

module.exports = router;
