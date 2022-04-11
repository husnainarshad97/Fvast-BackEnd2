const express = require("express");
const router = express.Router();
const VehicleManagementModel = require("../models/vehicleType-model");
const TripModel = require("../models/Trip-model");

//calculate fare api
router.post("/CalculateFinalFare", function (req, res, next) {
  const id = "6107cc664559d304e09f6f6f";
  VehicleManagementModel.findById(id)
    // .select("BaseFare PricePerKm PricePerMin")
    .exec()
    .then((result) => {
      let basefare = result.BaseFare;
      let pricekm = result.PricePerKm;
      let pricetime = result.PricePerMin; // per minute

      // get total distance travel and time in request body
      let totalDistance = req.body.Distance; // in KM
      let totalTime = req.body.Time; // In Mins

      let fare = basefare + pricekm * totalDistance + pricetime * totalTime;

      let newTrip = new TripModel({
        Time: totalTime,
        Distance: totalDistance,
        FinalFare: fare,
      });

      newTrip.save(function (err, responce) {
        if (err) {
          console.log("Error in Saving Trip", err);
          res.send(err);
        } else {
          res.send({
            message: "Trip Added",
            data: responce,
          });
        }
      });
    })
    .catch((err) => {
      console.log("Error in Calculating fare and is", err);
      res.send(err);
    });
});

//Fare get
router.get("/FareCalculationdata", function (req, res, next) {
  VehicleManagementModel.find(function (err, response) {
    if (err) {
      console.log("You have Error in Fare data api", err);
      res.send(err);
    } else {
      res.send({
        message: "Here is Fare",
        data: response,
      });
      // res.send(response);
    }
  });
});

//Fare calculation formula values update
router.put("/update", function (req, res, next) {
  const BaseFare = req.body.BaseFare;
  const PricePerKm = req.body.PricePerKm;
  const PricePerMin = req.body.PricePerMin;
  const id = "6107cc664559d304e09f6f6f";

  VehicleManagementModel.findByIdAndUpdate(
    id,
    { BaseFare: BaseFare, PricePerKm: PricePerKm, PricePerMin: PricePerMin },

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
router.delete("/Faredelete", function (req, res, next) {
  var { id } = req.query;
  VehicleManagementModel.findByIdAndDelete(id, function (err, response) {
    if (err) {
      console.log("You have Error in delete Fare api in Fare page", err);
      res.send(err);
    } else {
      res.send({
        message: "Fare  is deleted",
        data: response,
      });
    }
  });
});

module.exports = router;
