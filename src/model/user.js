const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    // require,
  },
  category: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
    // unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    // unique: true,
    require: [true, "Password is require"],
  },
});

const userSchema = mongoose.model("login", User);
module.exports = userSchema;
