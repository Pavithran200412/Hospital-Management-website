const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  icon: String,
  rating: Number  // 🔥 Make sure this line exists
});

module.exports = mongoose.model('Service', serviceSchema);
