const express = require("express");
const cors = require("cors");
const user = require("./src/baker-Apis/userLogin.js");
const uploadImage = require("./src/baker-Apis/image-upload-Api.js");
const getImage = require("./src/baker-Apis/image-get-Api.js");
const getUsers = require("./src/baker-Apis/getUser.js");

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

<<<<<<< Updated upstream
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
const port = 3001;
=======
app.use(user);
app.use(uploadImage);
app.use(getImage);
app.use(getUsers);
const port = process.env.PORT || 3001;
>>>>>>> Stashed changes

app.listen(port, () => console.log(`server is running on ${port}`));
