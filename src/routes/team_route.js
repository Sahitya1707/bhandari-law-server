const express = require("express");
const {
  addTeam,
  getAllTeam,
  deleteTeam,
  getTeam,
  updateTeam,
} = require("../controllers/team_controller");
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

router.post("/add", upload.single("image"), addTeam);
router.get("/get-all", getAllTeam);
router.delete("/delete/:id", deleteTeam);
router.get("/get/:id", getTeam);
router.put("/update/:id", updateTeam);
module.exports = router;
