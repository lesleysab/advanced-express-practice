const express = require("express");
const router = express.Router();
let {
  list,
  show,
  create,
  update,
  remove
} = require("../controllers/VehicleController");

router.get("/vehicles", list);
router.get("/vehicle/:_id", show);
router.post("/vehicles", create);
// router.put("/vehicles/:_id", update);
// router.delete("/vehciles/:_id", remove);

module.exports = router;
