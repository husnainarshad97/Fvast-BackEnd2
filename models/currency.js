const mongoose = require("mongoose");

var CurrencySchema = mongoose.Schema({
  Currency: {
    type: String,
    required: true,
  },
});

var CurrencyModel = mongoose.model("CurrencyTable", CurrencySchema);

module.exports = CurrencyModel;
