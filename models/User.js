const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  friends: [String],
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
