const express = require("express");
const {
  addMeta,
  getAllMeta,
  deleteMeta,
  getMeta,
  updateMeta,
} = require("../controllers/meta_tag_controller");
// console.log(addMeta);
const router = express.Router();

router.post("/add", addMeta);
router.get("/get-all", getAllMeta);
router.get("/get/:id", getMeta);
router.delete("/delete/:id", deleteMeta);
router.put("/update/:id", updateMeta);
module.exports = router;
