const mongoose = require("mongoose");

const CakeDetails = new mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String,
});

const cakeSchema = mongoose.model("data", CakeDetails);

module.exports = cakeSchema;
