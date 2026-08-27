const mongoose = require("mongoose");

const Order = mongoose.model("Order", {
  student: String,
  food: String,
  price: Number
});

module.exports = Order;