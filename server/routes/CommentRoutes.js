let express = require("express");
const router = express.Router();
let {
  list,
  show,
  create,
  update,
  remove
} = require("../controllers/CommentController");

router.get("/comments", list);
router.get("/comment/:_id", show);
router.post("/comments", create);
// router.put("/comments/:_id", update);
// router.delete("/comments/:_id", remove);

module.exports = router;
