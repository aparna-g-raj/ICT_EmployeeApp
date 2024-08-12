const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
});

module.exports = mongoose.model('tests', employeeSchema);
