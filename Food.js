const mongoose = require("mongoose");

const Food = mongoose.model("Food", {
    name: String,
    price: Number
});

module.exports = Food;