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

// Convert 24-hour time to AM/PM format before saving
appointmentSchema.pre("save", function (next) {
  const appointment = this;

  if (appointment.appointmentTime) {
    const [hour, minute] = appointment.appointmentTime.split(":");
    const h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    appointment.appointmentTime = `${hour12}:${minute} ${ampm}`;
  }

  next();
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
