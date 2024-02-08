const express = require("express");
const chocolateSchema = require("../../model/chocolate");
const getChocolateApi = express();

getChocolateApi.get("/api/get/image", async (req, res) => {
  const result = await chocolateSchema.find();
  res.send(result);
  // console.log(result);
});

module.exports = getChocolateApi;
