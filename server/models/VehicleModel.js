const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  make: {
    type: String
  },
  model: {
    type: String
  },
  year: {
    type: Number
  }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
