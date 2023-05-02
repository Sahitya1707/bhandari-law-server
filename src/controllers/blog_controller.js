const Blog = require("../models/blog_schema");
const path = require("path");
const fs = require("fs");

const addBlog = (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const blog = new Blog({
    title: req.body.title,
    image: req.file.filename,
    description: req.body.description,
    content: req.body.content,
  })
    .save()
    .then((success) => {
      return res
        .status(200)
        .json({ message: `Blog has been uploaded successfully` });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getAllBlog = (req, res) => {
  Blog.find()
    .then((blogs) => {
      return res.status(200).json(blogs);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findOne({ _id: id });
  const fileName = blog.image;
  const filePath = path.join(__dirname, "../upload", fileName); // assuming your Multer configuration specifies 'uploads' as the upload directory
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to delete file");
    } else {
      console.log(`Deleted`);
    }
  });
  Blog.findByIdAndDelete(id)
    .then((success) => {
      return res.status(200).json({ message: "Blog deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getBlog = (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  Blog.findById(id)
    .then((team) => {
      return res.status(200).json(team);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { addBlog, getAllBlog, deleteBlog, getBlog };
