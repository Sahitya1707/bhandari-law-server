const express = require("express");
const {
  getAllSliders,
  getSlider,
  addSlider,
  updateSlider,
} = require("../controllers/slider_controller");
const router = express.Router();

router.get("/get", getAllSliders);
router.get("/get/:sliderId", getSlider);
router.post("/add", addSlider);
router.get("/update/:sliderId", updateSlider);

// export default router;
module.exports = router;
