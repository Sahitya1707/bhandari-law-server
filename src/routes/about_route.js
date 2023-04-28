const express = require("express");
const {
  addAbout,
  getAbout,
  getOneAbout,
  updateAbout,
} = require("../controllers/about_controller");
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
router.post("/add", upload.single("image"), addAbout);
router.get("/get", getAbout);
router.get("/get/:id", getOneAbout);
router.put("/update/:id", upload.single("image"), updateAbout);

module.exports = router;
