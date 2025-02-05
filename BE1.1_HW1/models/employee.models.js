const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  empName: String,
  empProfile: String,
  idNo: Number,
  dateBirth: Date,
  mail: String,
  telePhoneNo: Number,
  address: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
