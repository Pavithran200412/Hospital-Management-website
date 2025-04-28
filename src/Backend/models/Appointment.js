const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  specialty: { type: String, required: true },
  phone: { type: String, required: true },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  status: { type: String, default: "Pending" }, // Add the status field
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
