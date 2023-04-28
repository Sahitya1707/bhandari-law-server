const Comment = require("../models/comment_schema");

const addComment = (req, res) => {
  //   const comment = new Comment({
  //     name: req.body.name,
  //     comment: req.body.comment,
  //     id: req.body.id,
  //   })
  //     .save()
  //     .then((success) => {
  //       return res
  //         .status(200)
  //         .json({ message: "Comment has been uploaded succesfully" });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

module.exports = {
  addComment,
};
