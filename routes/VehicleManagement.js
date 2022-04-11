const express = require("express");
const router = express.Router();
const VehicleTypeModel = require("../models/vehicleType-model");

router.post("/saveVehicleType", function (req, res, next) {
  let newVehicleType = new VehicleTypeModel({
    VehicleType: req.body.VehicleType,
    BaseFare: req.body.BaseFare,
    PricePerKm: req.body.PricePerKm,
    PricePerMin: req.body.PricePerMin,
  });

  console.log(newVehicleType);

  newVehicleType.save(function (err, responce) {
    if (err) {
      console.log("Error in Add VehicleType", err);
      res.send(err);
    } else {
      res.send({
        message: "VehicleType Added",
        data: responce,
      });
    }
  });
});

//get specific data
router.get("/getdata", function (req, res, next) {
  VehicleTypeModel.find(function (err, response) {
    if (err) {
      console.log("You have Error in Fare data api", err);
      res.send(err);
    } else {
      res.send({
        message: "Here is All vehicles types and fare base etc",
        data: response,
      });
      // res.send(response);
    }
  });
});

//Fare calculation formula values update
router.put("/update", function (req, res, next) {
  const VehicleType = req.body.VehicleType;
  const BaseFare = req.body.BaseFare;
  const PricePerKm = req.body.PricePerKm;
  const PricePerMin = req.body.PricePerMin;
  const id = req.body.id;
  console.log("id is ", id);
  VehicleTypeModel.findByIdAndUpdate(
    id,
    {
      VehicleType: VehicleType,
      BaseFare: BaseFare,
      PricePerKm: PricePerKm,
      PricePerMin: PricePerMin,
    },

    function (err, response) {
      if (err) {
        console.log("You have Error in Fare Calculation Update Api", err);
        res.send(err);
      } else {
        res.send({
          message: "Fare Calculation data is update",
          data: response,
        });
      }
    }
  );
});

//delete Fare
router.delete("/deleteVehicle", function (req, res, next) {
  var { id } = req.query;
  VehicleTypeModel.findByIdAndDelete(id, function (err, response) {
    if (err) {
      console.log("You have Error in delete Vehicle api in Vehicle page", err);
      res.send(err);
    } else {
      res.send({
        message: "Vehicle  is deleted",
        data: response,
      });
    }
  });
});

module.exports = router;
