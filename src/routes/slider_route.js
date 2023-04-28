const express = require("express");
const {
  addSlider,
  getAllSliders,
  deleteSlider,
} = require("../controllers/slider_controller");
// const path = require("path");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/upload/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.get("/get-all", getAllSliders);
router.delete("/delete/:id", deleteSlider);
// router.get("/get/:sliderId", getSlider);
router.post("/add", upload.single("image"), addSlider);
// router.get("/update/:sliderId", updateSlider);

// export default router;
module.exports = router;
