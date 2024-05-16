const express = require("express");
const chocolateSchema = require("../../model/chocolate");
const getChocolateApi = express();

getChocolateApi.get("/api/get/chocolate", async (req, res) => {
  const result = await chocolateSchema.find();
  res.send(result);
});

module.exports = getChocolateApi;
