const mongoose = require("mongoose");

var adminprofileSchema = mongoose.Schema({
  Pusername: {
    type: String,
    required: true,
  },
  Pemail: {
    type: String,
    required: true,
  },
  Paddress: {
    type: String,
    required: true,
  },
});

var adminprofileModel = mongoose.model("adminprofiletable", adminprofileSchema);

module.exports = adminprofileModel;
