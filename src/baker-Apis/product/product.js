const express = require("express");
require("../../config/cake");
const cloudinary = require("../../utils/cloudinary");
const ProductSchema = require("../../model/product");

const productApi = express();

productApi.get("/api/products", async (req, res) => {
  let flavour = req.query["flavour"];
  let size = req.query["size"];
  let pageNo = req.query["pageNo"];
  if (!size) {
    size = 20;
  }
  let filter = {};
  if (flavour) {
    filter["flavour"] = flavour;
  }

  const result = await ProductSchema.find(filter)
    .limit(size)
    .skip(pageNo * size);
  res.send(result);

  // console.log(result);
});

productApi.get("/api/products/:id", async (req, res) => {
  let pId = req.params["id"];
  console.log("id", pId);
  const result = await ProductSchema.findById(pId);
  res.send(result);
});

productApi.post("/api/products", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const result = await cloudinary.uploader.upload(fileStr);
    const imageUrl = result.secure_url;

    // Create a new post document with the image URL
    const newCake = new ProductSchema({
      // productType: req.body.productType,
      name: req.body.name,
      price: req.body.price,
      imageUrl: imageUrl,
      flavour: req.body.flavour,
      weight: req.body.weight,
    });
    await newCake.save();
    // console.log(newCake);
    res.status(200).json({ mess: "done" });
    // console.log(fileStr);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ mess: "failed" });
  }
});

module.exports = productApi;
