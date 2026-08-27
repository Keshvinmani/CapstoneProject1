const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  name: String,
  email: String,
  password: String
});

module.exports = Student;