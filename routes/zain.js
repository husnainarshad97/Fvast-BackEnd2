var express = require("express");
var router = express.Router();
const LoginModel = require("../models/login");
const FahadModel = require("../models/fahad");

/* GET home page. */
router.get("/try", function (req, res, next) {
  var name = req.body.cn;
  res.render("index", { title: "Hasnain Arshad" });
  // res.send({ title: 'Express' });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Hasnain Arshad login" });
});

router.post("/login", function (req, res, next) {
  var Lusername = req.body.LName;
  var Lpassword = req.body.LPass;
  var LAge = req.body.LAge;

  let newLogin = new LoginModel({
    LuserName: Lusername,
    Lpassword: Lpassword,
    LAge: LAge,
  });

  console.log(newLogin);

  newLogin.save(function (err, responce) {
    if (err) {
      console.log("Error in Add User", err);
      res.send(err);
    } else {
      res.send({
        message: "UserAdded",
        data: responce,
      });
    }
  });
});

router.post("/fahad", function (req, res, next) {
  // var username = req.body.Name;
  var Faddress = req.body.Faddress;
  var Fphone = req.body.Fphone;

  let newfahad = new FahadModel({
    Fusername: req.body.FName,
    Faddress: Faddress,
    Fphone: Fphone,
  });

  console.log(newfahad);

  newfahad.save(function (err, responce) {
    if (err) {
      console.log("Error in Add fahad", err);
      res.send(err);
    } else {
      res.send({
        message: "fahad Added",
        data: responce,
      });
    }
  });
});

router.get("/fahaddata", function (req, res, next) {
  FahadModel.find(function (err, response) {
    if (err) {
      console.log("You have Error in fahaddata api", err);
      res.send(err);
    } else {
      res.send({
        message: "Here is fahad addresss",
        data: response,
      });
    }
  });
});

//fahad address update
router.put("/update", function (req, res, next) {
  const Faddress = req.body.Faddress;
  const Fname = req.body.Fname;
  FahadModel.findOneAndUpdate(
    { Fusername: Fname },
    { Faddress: Faddress },
    function (err, response) {
      if (err) {
        console.log("You have Error in fahad update api in zain page", err);
        res.send(err);
      } else {
        res.send({
          message: "fahad addresss is updated",
          data: response,
        });
      }
    }
  );
});

router.delete("/fahaddelete", function (req, res, next) {
  var { id } = req.query;
  FahadModel.findByIdAndDelete(id, function (err, response) {
    if (err) {
      console.log("You have Error in delete fahad api in zain page", err);
      res.send(err);
    } else {
      res.send({
        message: "fahad  is deleted",
        data: response,
      });
    }
  });
});

router.delete("/logindelete", function (req, res, next) {
  var { id } = req.query;
  LoginModel.findByIdAndDelete(id, function (err, response) {
    if (err) {
      console.log("You have Error in delete login api in zain page", err);
      res.send(err);
    } else {
      res.send({
        message: "login  is deleted",
        data: response,
      });
    }
  });
});

module.exports = router;
