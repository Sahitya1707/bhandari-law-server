const Publication = require("../models/publication_schema");
const path = require("path");
const fs = require("fs");

const addPublication = (req, res) => {
  //   console.log(req.body);
  const publication = new Publication({
    title: req.body.title,
    description: req.body.description,
    team: req.body.teamMember,
    image: req.file.filename,
  });
  publication
    .save()
    .then((success) => {
      return res
        .status(200)
        .json({ message: "Publication successfully Uploaded" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAllPublications = (req, res) => {
  Publication.find()
    .then((publication) => {
      return res.status(200).json(publication);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getPublication = (req, res) => {
  const { id } = req.params;
  // console.log(id);
  Publication.findById(id)
    .then((publication) => {
      return res.status(200).json(publication);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deletePublication = async (req, res) => {
  const { id } = req.params;
  const publication = await Publication.findOne({ _id: id });
  const fileName = publication.image;
  const filePath = path.join(__dirname, "../upload", fileName); // assuming your Multer configuration specifies 'uploads' as the upload directory
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to delete file");
    } else {
      console.log(`Deleted`);
    }
  });
  Publication.findByIdAndDelete(id)
    .then((success) => {
      return res.status(200).json({ message: "slider deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const updatePublication = (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);

  Publication.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((publication) => res.status(200).json(publication))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllPublications,
  addPublication,
  getPublication,
  deletePublication,
  updatePublication,
};
