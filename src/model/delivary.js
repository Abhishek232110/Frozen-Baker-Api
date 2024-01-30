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
});

const cakeSchema = mongoose.model("delivary", DelivarySchema);

module.exports = cakeSchema;
