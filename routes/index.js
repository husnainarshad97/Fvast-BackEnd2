var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  // res.send({ title: 'Express' });
});

router.post("/try", function (req, res, next) {
  var { StudentID, MyID } = req.query;

  var t = req.body.time;
  var d = req.body.data;
  var w = req.body.workingat;
  var p = req.body.people;

  // var hasnain = { Name: "hasnain khan", age: "21", Gender: "Male" };
  res.send({
    time: t,
    data: d,
    workingat: w,
    people: p,
    studentId: StudentID,
    MyID: MyID,
  });
});
module.exports = router;
