const mongoose = require("mongoose");

const IcecreamDetails = new mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String,
  flavour: String,
  weight: String,
});

const icecreamSchema = mongoose.model("IcecreamDetails", IcecreamDetails);

module.exports = icecreamSchema;
