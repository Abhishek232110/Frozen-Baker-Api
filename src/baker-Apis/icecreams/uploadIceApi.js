const express = require("express");
require("../../config/cake");
const pastrySchema = require("../../model/icecream");
const cloudinary = require("../../utils/cloudinary");

const UploadIcecream = express();
UploadIcecream.post("/api/upload/icecream", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const result = await cloudinary.uploader.upload(fileStr);
    const imageUrl = result.secure_url;

    // Create a new post document with the image URL
    const newCake = new pastrySchema({
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

module.exports = UploadIcecream;
