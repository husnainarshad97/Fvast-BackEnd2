var express = require("express");
var router = express.Router();
const CurrencyModel = require("../models/currency");

//add currency
router.post("/addCurrency", function (req, res, next) {
  var Currency = req.body.Currency;
  let newCurrency = new CurrencyModel({
    Currency: Currency,
  });

  console.log(newCurrency);

  newCurrency.save(function (err, responce) {
    if (err) {
      console.log("Error in Add Currency", err);
      res.send(err);
    } else {
      res.send({
        message: "Currency Added",
        data: responce,
      });
    }
  });
});

//get currency
router.get("/Currencydata", function (req, res, next) {
  CurrencyModel.find(function (err, response) {
    if (err) {
      console.log("You have Error in Currency api", err);
      res.send(err);
    } else {
      res.send({
        message: "Here is Currency",
        data: response,
      });
    }
  });
});

//delete currency
router.delete("/Currencydelete", function (req, res, next) {
  var { id } = req.query;
  CurrencyModel.findByIdAndDelete(id, function (err, response) {
    if (err) {
      console.log("You have Error in delete Currency api in zain page", err);
      res.send(err);
    } else {
      res.send({
        message: "Currency  is deleted",
        data: response,
      });
    }
  });
});

module.exports = router;
