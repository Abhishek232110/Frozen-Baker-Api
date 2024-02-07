const express = require("express");
const cakeSchema = require("../model/cake");
const uploadImage = express();

uploadImage.get("/api/get/image", async (req, res) => {
  const result = await cakeSchema.find();
  res.send(result);
  // console.log(result);
});

module.exports = uploadImage;
