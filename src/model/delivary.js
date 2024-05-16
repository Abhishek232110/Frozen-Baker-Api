const mongoose = require("mongoose");

const DelivarySchema = new mongoose.Schema({
  delivary: {
    type: String,
    require,
  },
  date: String,
  message: String,
  radio: String,
  radio: String,
  name: String,
  email: String,
  number: Number,
  pincode: String,
  city: String,
  address: String,
});

const cakeSchema = mongoose.model("delivary", DelivarySchema);

module.exports = cakeSchema;
