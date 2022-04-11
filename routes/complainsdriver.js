var express = require("express");
var router = express.Router();
const complaindriverModel = require("../models/complaindriver");

//add in complain

router.post("/complain", function (req, res, next) {
  var CDusername = req.body.CDName;
  var CDemail = req.body.CDemail;
  var CDcomplain = req.body.CDcomplain;
  var CDphone = req.body.CDphone;

  let newcomplaindriver = new complaindriverModel({
    CDusername: CDusername,
    CDcomplain: CDcomplain,
    CDemail: CDemail,
    CDphone: CDphone,
  });

  console.log(newcomplaindriver);

  newcomplaindriver.save(function (err, responce) {
    if (err) {
      console.log("Error in Add complaindriver", err);
      res.send(err);
    } else {
      res.send({
        message: "complaindriver Added",
        data: responce,
      });
    }
  });
});

//complain get
router.get("/complaindata", function (req, res, next) {
  complaindriverModel.find(function (err, response) {
    if (err) {
      console.log("You have Error in complain driver data api", err);
      res.send(err);
    } else {
      //   res.send({
      //     message: "Here is complaindriver",
      //     data: response,
      //   });
      res.send(response);
    }
  });
});

//delete complain
router.delete("/complaindelete", function (req, res, next) {
  var { id } = req.query;
  complaindriverModel.findByIdAndDelete(id, function (err, response) {
    if (err) {
      console.log(
        "You have Error in delete complain api in driver comlain page",
        err
      );
      res.send(err);
    } else {
      res.send({
        message: "complain driver is deleted",
        data: response,
      });
    }
  });
});

module.exports = router;
