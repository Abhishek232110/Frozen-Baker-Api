const express = require("express");
const router = express.Router();

const cloudinary = require("cloudinary").v2;
const multer = require("module");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = result.secure_url;

    res.send({ imageUrl });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "server error",
    });
  }
});

module.exports = router;
