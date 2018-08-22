const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("Comment", commentSchema);
