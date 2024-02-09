const express = require("express");
const cakeSchema = require("../model/cake");
const uploadImage = express();

uploadImage.get("/api/get/image", async (req, res) => {
  const result = await cakeSchema.find();
  res.send(result);
  // console.log(result);
});

uploadImage.get("/get", async (req, res) => {
  const query = { price: 213 };
  const data = await cakeSchema.find(query);
  res.send(data);
});
module.exports = uploadImage;
