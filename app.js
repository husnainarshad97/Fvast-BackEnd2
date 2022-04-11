var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var con = require("./config/config");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var driversRouter = require("./routes/drivers");
var zainRouter = require("./routes/zain");
var currencyRouter = require("./routes/currency");
var complainsRouter = require("./routes/complains");
var complainsdriverRouter = require("./routes/complainsdriver");
var FareCalculationRouter = require("./routes/FareCalculation");
var VehicleManagementRouter = require("./routes/VehicleManagement");

var app = express();

app.use(cors());
require("dotenv").config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/drivers", driversRouter);
app.use("/zain", zainRouter);
app.use("/currency", currencyRouter);
app.use("/complains", complainsRouter);
app.use("/complainsdriver", complainsdriverRouter);
app.use("/FareCalculation", FareCalculationRouter);
app.use("/VehicleManagement", VehicleManagementRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
