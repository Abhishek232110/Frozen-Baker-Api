const express = require("express");
const cors = require("cors");
const cloudinary = require("./src/utils/cloudinary.js");
const mongoose = require("mongoose");
const cakeSchema = require("./src/model/cake.js");

// const router = require("./multer.js");

// connect
mongoose.connect("mongodb://localhost:27017/Frozen-Baker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(
  cors({
    allowedHeaders: "*",
    methods: "POST",
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.post("/api/upload/image", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const result = await cloudinary.uploader.upload(fileStr);
    const imageUrl = result.secure_url;

    // Create a new post document with the image URL
    const newCake = new cakeSchema({
      name: req.body.name,
      price: req.body.price,
      imageUrl: imageUrl,
    });
    await newCake.save();
    console.log(newCake);
    res.status(200).json({ mess: "done" });
    // console.log(fileStr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mess: "failed" });
  }
});

app.get("/api/get/image", async (req, res) => {
  const result = await cakeSchema.find();
  res.send(result);
  console.log(result);
});
const port = 3007;

app.listen(port, () => console.log(`server is running on ${port}`));
