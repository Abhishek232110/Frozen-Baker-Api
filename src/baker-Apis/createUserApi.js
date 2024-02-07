const express = require("express");
require("../config/cake");
const userSchema = require("../model/user.js");
const jwtToken = require("jsonwebtoken");
const jwtKey = "userSchema";
const createUser = express();

createUser.post("/api/user/register", async (req, res) => {
  let dataBase = new userSchema(req.body);
  let data = await dataBase.save(req.body);
  data = data.toObject();
  delete data.password;
  jwtToken.sign({ data }, jwtKey, { expiresIn: "10h" }, (err, token) => {
    res.send({ data, auth: token });
  });
});

module.exports = createUser;
