const express = require("express");
const {
  getAllPublications,
  addPublication,
  getPublication,
  deletePublication,
  updatePublication,
} = require("../controllers/publication_controller");
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
router.post("/add", upload.single("image"), addPublication);
router.get("/get-all", getAllPublications);
router.delete("/delete/:id", deletePublication);
router.get("/get/:id", getPublication);
router.put("/update/:id", upload.single("image"), updatePublication);

module.exports = router;
