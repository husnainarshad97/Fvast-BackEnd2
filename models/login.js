const mongoose = require("mongoose");

var loginSchema = mongoose.Schema({
  LuserName: {
    type: String,
    required: true,
  },
  Lpassword: {
    type: String,
    required: true,
  },
  LAge: {
    type: Number,
  },
});

var loginModel = mongoose.model("loginTable", loginSchema);

module.exports = loginModel;
