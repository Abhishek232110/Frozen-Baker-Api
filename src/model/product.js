const mongoose = require("mongoose");

const ProductDetails = new mongoose.Schema({
  name: String,
  productType: String,
  price: String,
  imageUrl: String,
  flavour: String,
  weight: String,
});

const ProductSchema = mongoose.model("ProductDetails", ProductDetails);

module.exports = ProductSchema;
