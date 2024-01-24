require("dotenv");

const cloudinary = require("cloudinary");

cloudinary.v2.config({
  cloud_name: "dfri30ket",
  api_key: "574278726678961",
  api_secret: "FOLn1sEKI1mNUZ5r371m-PIEXws",
  secure: true,
});

module.exports = cloudinary;
