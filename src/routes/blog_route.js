const express = require("express");
const {
  addBlog,
  getAllBlog,
  deleteBlog,
  getBlog,
} = require("../controllers/blog_controller");
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

router.post("/add", upload.single("image"), addBlog);
router.get("/get-all", getAllBlog);
router.delete("/delete/:id", deleteBlog);
router.get("/get/:id", getBlog);
module.exports = router;
