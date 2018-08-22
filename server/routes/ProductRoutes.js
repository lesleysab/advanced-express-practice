let express = require("express");
const router = express.Router();
let {
  list,
  show,
  create,
  update,
  remove
} = require("../controllers/ProductController");

router.get("/products", list);
router.get("/product/:_id", show);
router.post("/products", create);
// router.put("/products/:_id", update);
// router.delete("/products/:_id", remove);

module.exports = router;
