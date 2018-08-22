// const mongoose = require("mongoose");
// let vehicles = require("../vehicles");
const VehicleModel = require("../models/VehicleModel");

module.exports.list = function list(req, res) {
  VehicleModel.find({})
    .exec()
    .then(vehicles => {
      return res.json(vehicles);
    });
};

module.exports.show = function show(req, res) {
  VehicleModel.findById(req.params._id)
    .exec()
    .then(vehicle => {
      return res.json(vehicle);
    });
};

module.exports.create = function create(req, res) {
  const newVehicle = new VehicleModel({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  });
  newVehicle.save().then(savedVehicle => {
    return res.json(savedVehicle);
  });
};

//    module.exports.update =  function update(req, res) {
//     return res.json({theId: req.params.id});
//    }

//    module.exports.remove =  function remove(req, res) {
//     return res.json({});
//    }
