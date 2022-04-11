var express = require("express");
var router = express.Router();
const complainModel = require("../models/complain");

//add in complain

router.post("/complain", function (req, res, next) {
  var Cusername = req.body.CName;
  var Cemail = req.body.Cemail;
  var Ccomplain = req.body.Ccomplain;
  var Cphone = req.body.Cphone;

  let newcomplain = new complainModel({
    Cusername: Cusername,
    Ccomplain: Ccomplain,
    Cemail: Cemail,
    Cphone: Cphone,
  });

  console.log(newcomplain);

  newcomplain.save(function (err, responce) {
    if (err) {
      console.log("Error in Add complain", err);
      res.send(err);
    } else {
      res.send({
        message: "complain Added",
        data: responce,
      });
    }
  });
});

//complain get
router.get("/complaindata", checkData,function (req, res, next) {
  complainModel.find(function (err, response) {
    if (err) {
      console.log("You have Error in complain data api", err);
      res.send(err);
    } else {
      // res.send({
      //   message: "Here is complain",
      //   data: response,
      // });
      res.send(response);
    }
  });
});

//delete complain
router.delete("/complaindelete", function (req, res, next) {
  var { id } = req.query;
  complainModel.findByIdAndDelete(id, function (err, response) {
    if (err) {
      console.log("You have Error in delete complain api in zain page", err);
      res.send(err);
    } else {
      res.send({
        message: "complain  is deleted",
        data: response,
      });
    }
  });
});

module.exports = router;
