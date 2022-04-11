const mongoose = require("mongoose");

var VehicleTypeSchema = mongoose.Schema({
  VehicleType: {
    type: String,
    required: true,
  },

  BaseFare: {
    type: Number,
    required: true,
  },

  PricePerKm: {
    type: Number,
    required: true,
  },

  PricePerMin: {
    type: Number,
    required: true,
  },
});

var VehicleTypeModel = mongoose.model("VehicleTypetable", VehicleTypeSchema);

module.exports = VehicleTypeModel;
