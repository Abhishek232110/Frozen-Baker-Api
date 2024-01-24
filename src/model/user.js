import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    required,
  },
  email: {
    type: String,
    required,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    unique: true,
    require: [true, "Password is require"],
  },
});

const userSchema = mongoose.model("data", User);
module.exports = userSchema;
