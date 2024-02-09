const express = require("express");
const icecreamSchema = require("../../model/icecream");
const getIcecreamApi = express();

getIcecreamApi.get("/api/get/icecream", async (req, res) => {
  const result = await icecreamSchema.find();
  res.send(result);
  // console.log(result);
});

module.exports = getIcecreamApi;
