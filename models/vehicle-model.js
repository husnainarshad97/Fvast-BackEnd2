const mongoose = require("mongoose");

var VehicleSchema = mongoose.Schema({

  firstName: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "driverstable",
  },

  VehicleType: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "VehicleTypetable",
  },

  VehicleName: {
    type: String,
    required: true,
  },
  
  VehicleNumber: {
    type: String,
    required: true,
  },
  VehicleModel: {
    type: String,
    required: true,
  },
});

var VehicleModel = mongoose.model("VehicleTable", VehicleSchema);

module.exports = VehicleModel;
