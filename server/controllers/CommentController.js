// const mongoose = require("mongoose");
// let comments = require("../comments");
const CommentModel = require("../models/CommentModel");

module.exports.list = function list(req, res) {
  CommentModel.find({})
    .exec()
    .then(comments => {
      return res.json(comments);
    });
};

module.exports.show = function show(req, res) {
  CommentModel.findById(req.params._id)
    .exec()
    .then(comment => {
      return res.json(comment);
    });
};

module.exports.create = function create(req, res) {
  const newComment = new CommentModel({
    body: req.body.body
  });
  newComment.save().then(savedComment => {
    return res.json(savedComment);
  });
};

//    module.exports.update =  function update(req, res) {
//     return res.json({theId: req.params.id});
//    }

//    module.exports.remove =  function remove(req, res) {
//     return res.json({});
//    }
