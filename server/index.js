let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://lesleysab:Murphydog1@ds121282.mlab.com:21282/aca-test"
);

let ContactRoutes = require("./routes/ContactRoutes");
let CommentRoutes = require("./routes/CommentRoutes");
let VehicleRoutes = require("./routes/VehicleRoutes");
let ProductRoutes = require("./routes/ProductRoutes");

const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(VehicleRoutes);
app.use(ProductRoutes);

app.listen(3001, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Yo!");
});
