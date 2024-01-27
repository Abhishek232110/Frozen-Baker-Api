const express = require("express");
require("../config/cake");
const userSchema = require("../model/user.js");

const getUsers = express();

getUsers.get("/api/get/users", async (req, res) => {
  const data = await userSchema.find();
  res.send(data);
});

module.exports = getUsers;
