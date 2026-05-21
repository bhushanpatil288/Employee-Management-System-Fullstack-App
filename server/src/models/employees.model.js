const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    enum: ['manager', 'developer', 'designer', 'tester'],
  },
  salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('employees', employeeSchema);
