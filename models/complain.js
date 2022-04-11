const mongoose = require("mongoose");

var complainSchema = mongoose.Schema({
  Cusername: {
    type: String,
    required: true,
  },
  Ccomplain: {
    type: String,
    required: true,
  },
  Cemail: {
    type: String,
    required: true,
  },

  Cphone: {
    type: String,
    required: true,
  },
});

var complainModel = mongoose.model("complaintable", complainSchema);

module.exports = complainModel;
