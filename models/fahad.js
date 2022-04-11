const mongoose = require("mongoose");

var fahadSchema = mongoose.Schema({
  Fusername: {
    type: String,
    required: true,
  },
  Faddress: {
    type: String,
    required: true,
  },
  Fphone: {
    type: Number,
  },
});

var fahadModel = mongoose.model("fahadtable", fahadSchema);

module.exports = fahadModel;
