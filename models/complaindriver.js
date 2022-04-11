const mongoose = require("mongoose");

var complaindriverSchema = mongoose.Schema({
  CDusername: {
    type: String,
    required: true,
  },
  CDcomplain: {
    type: String,
    required: true,
  },
  CDemail: {
    type: String,
    required: true,
  },

  CDphone: {
    type: String,
    required: true,
  },
});

var complaindriverModel = mongoose.model(
  "complaindrivertable",
  complaindriverSchema
);

module.exports = complaindriverModel;
