const express = require("express");
const pastrySchema = require("../../model/pastry");
const getPastryApi = express();

getPastryApi.get("/api/get/image", async (req, res) => {
  const result = await pastrySchema.find();
  res.send(result);
  // console.log(result);
});

module.exports = getPastryApi;
