const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  message: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
