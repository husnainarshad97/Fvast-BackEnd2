const mongoose = require("mongoose");

var driversSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  
  invitationCode: {
    type: String,
  },
});

var driversModel = mongoose.model("driverstable", driversSchema);

module.exports = driversModel;
