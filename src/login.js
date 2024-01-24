const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const signUp = require("./user/signup");

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/loginUserDetails");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  signUp.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("wrong password");
      }
    } else {
      res.json(" wrong emailId ");
    }
  });
});

app.post("/register", (req, res) => {
  signUp
    .create(req.body)
    .then((userDetails) => res.json(userDetails))
    .catch((err) => res.json(err));
});

app.listen(4001, (res, req) => {
  console.log("server running port on 4001");
});
