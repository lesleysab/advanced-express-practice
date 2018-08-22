const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  occupation: {
    type: String
  }
});

module.exports = mongoose.model("Contact", contactSchema);
