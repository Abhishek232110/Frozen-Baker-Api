const mongoose = require("mongoose");

const PastryDetails = new mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String,
  flavour: String,
  weight: String,
});

const pastrySchema = mongoose.model("PastryDetails", PastryDetails);

module.exports = pastrySchema;
