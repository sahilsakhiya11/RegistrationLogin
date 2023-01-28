const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    index: true,
  },
  address: String,
  role: {
    type: String,
    default: "subscriber",
  },
  cart: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
