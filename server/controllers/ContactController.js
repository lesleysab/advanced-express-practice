// const mongoose = require("mongoose");
// let contacts = require("../contacts");
const ContactModel = require("../models/ContactModel");

module.exports.list = function list(req, res) {
  ContactModel.find({})
    .exec()
    .then(contacts => {
      return res.json(contacts);
    });
};

module.exports.show = function show(req, res) {
  ContactModel.findById(req.params._id)
    .exec()
    .then(contact => {
      return res.json(contact);
    });
};

module.exports.create = function create(req, res) {
  const newContact = new ContactModel({
    name: req.body.name,
    avatar: req.body.avatar,
    occupation: req.body.occupation
  });
  newContact.save().then(savedContact => {
    return res.json(savedContact);
  });
};

//    module.exports.update =  function update(req, res) {
//         ContactModel.findById("").exec()
//             .then(contact => {
//             contact.occupation = "baker"
//             return contact.save();
//             })
//             .then(contact => {
//             res.json(contact);
//             });
//             return;
//    }

//    module.exports.remove =  function remove(req, res) {
//     return res.json({});
//    }
