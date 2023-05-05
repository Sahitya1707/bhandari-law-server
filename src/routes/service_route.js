const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addService,
  getAllService,
  deleteService,
  getService,
  updateService,
} = require("../controllers/service_controller");

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

router.post("/add", upload.single("image"), addService);
router.get("/get-all", getAllService);
router.delete("/delete/:id", deleteService);
router.get("/get/:id", getService);
router.put("/update/:id", upload.single("image"), updateService);

module.exports = router;
