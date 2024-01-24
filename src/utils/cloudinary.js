require("dotenv");

const cloudinary = require("cloudinary");

cloudinary.v2.config({
  cloud_name: "dlqgesbvq",
  api_key: "336183728736854",
  api_secret: "0NojK28NpVADnJcsw2UBeiCAgs8",
});

module.exports = cloudinary;
