const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Frozen-Baker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
