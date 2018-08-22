// const mongoose = require("mongoose");
// let products = require("../products");
const ProductModel = require("../models/ProductModel");

module.exports.list = function list(req, res) {
  ProductModel.find({})
    .exec()
    .then(products => {
      return res.json(products);
    });
};

module.exports.show = function show(req, res) {
  ProductModel.findById(req.params._id)
    .exec()
    .then(product => {
      return res.json(product);
    });
};

module.exports.create = function create(req, res) {
  const newProduct = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
  newProduct.save().then(savedProduct => {
    return res.json(savedProduct);
  });
};

//    module.exports.update =  function update(req, res) {
//     return res.json({theId: req.params.id});
//    }

//    module.exports.remove =  function remove(req, res) {
//     return res.json({});
//    }
