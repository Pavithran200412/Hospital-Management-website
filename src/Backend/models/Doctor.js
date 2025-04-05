const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true }  // Replaces imageUrl
});

module.exports = mongoose.model("Doctor", doctorSchema, "doctors");
