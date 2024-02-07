const express = require("express");
require("../config/cake");
const cakeSchema = require("../model/cake");
const cloudinary = require("../utils/cloudinary");

const imageUpload = express();
imageUpload.post("/api/upload/image", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const result = await cloudinary.uploader.upload(fileStr);
    const imageUrl = result.secure_url;

    // Create a new post document with the image URL
    const newCake = new cakeSchema({
      name: req.body.name,
      price: req.body.price,
      imageUrl: imageUrl,
      caketype: req.body.caketype,
      flavour: req.body.flavour,
      shape: req.body.shape,
      size: req.body.size,
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

module.exports = imageUpload;
