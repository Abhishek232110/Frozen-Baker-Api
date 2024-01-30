const express = require("express");
require("../config/cake");
const delivary = require("../model/delivary.js");

const DelivaryDetails = express();
DelivaryDetails.post("/api/upload/delivary/information", async (req, res) => {
  const data = new delivary(req.body);
  const store = await data.save(req.body);
  res.send(store);
});

module.exports = DelivaryDetails;
