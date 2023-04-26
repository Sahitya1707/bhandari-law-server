const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
    default: 0,
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
