const express = require("express");
const { addComment } = require("../controllers/comment_controller");
const router = express.Router();

router.post("/add", addComment);
module.exports = router;
