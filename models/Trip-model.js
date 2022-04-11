const mongoose = require("mongoose");

var TripSchema = mongoose.Schema({
  firstName: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "driverstable",
  },

  firstName: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "userstable",
  },
  
  From: {
    type: Number,
    required: true,
  },
  To: {
    type: Number,
    required: true,
  },
  tripType: {
    type: String,
    required: true,
  },
  currentTime: {
    type: String,
    required: true,
  },
  TimeTraveled: {
    type: Number,
    required: true,
  },
  DistanceTraveled: {
    type: Number,
    required: true,
  },
  FinalFare: {
    type: Number,
    required: true,
  },
});

var TripModel = mongoose.model("TripTable", TripSchema);

module.exports = TripModel;
