const express = require("express");
require("../config/cake");
const userSchema = require("../model/user.js");

const user = express();

user.post("/api/user/save", async (req, res) => {
  const data = new userSchema(req.body);
  const result = await data.save(req.body);
  res.send(result);
});

module.exports = user;
