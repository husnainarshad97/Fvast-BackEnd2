var express = require("express");
var router = express.Router();
const adminprofileModel = require("../models/adminprofile");


//add profile

router.post("/adminprofile", function (req, res, next) {
    var Pusername = req.body.Pusername;
    var Pemail = req.body.Pemail;
    var Paddress = req.body.Paddress;
  
    let newadminprofile = new adminprofileModel({
      Pusername: Pusername,
      Pemail: Pemail,
      Paddress: Paddress,
    });
  
    console.log(newadminprofile);
  
    newadminprofile.save(function (err, responce) {
      if (err) {
        console.log("Error in Add adminprofile", err);
        res.send(err);
      } else {
        res.send({
          message: "profile Added",
          data: responce,
        });
      }
    });
  });
  
  //admin profile update
  router.put("/updateadminprofile", function (req, res, next) {
    const Pusername = req.body.Pusername;
    const Pemail = req.body.Pemail;
    const Paddress = req.body.Paddress;
    adminprofileModel.findOneAndUpdate(
      { Pusername: Pusername },
      { Pemail: Pemail },
      { Paddress: Paddress },
      function (err, response) {
        if (err) {
          console.log(
            "You have Error in admin profile update api in zain page",
            err
          );
          res.send(err);
        } else {
          res.send({
            message: "admin profile is updated",
            data: response,
          });
        }
      }
    );
  });
  
  

module.exports = router;
