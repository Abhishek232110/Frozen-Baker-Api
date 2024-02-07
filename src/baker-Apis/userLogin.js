const express = require("express");
require("../config/cake");
const userSchema = require("../model/user.js");
const jwtToken = require("jsonwebtoken");
const jwtKey = "userSchema";
const loginUser = express();

loginUser.post("/api/user/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let data = await userSchema.findOne(req.body).select("-password");
    {
      data
        ? jwtToken.sign(
            { data },
            jwtKey,
            { expiresIn: "10h" },
            (err, token) => {
              res.send({ data, auth: token });
            }
          )
        : res.send("email or password not match");
    }
  } else {
    res.send("user not found");
  }
});

module.exports = loginUser;
