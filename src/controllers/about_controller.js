const About = require("../models/about_schema");

const addAbout = (req, res) => {
  console.log(`about has been reached`);
  //   console.log(req);
  // console.log(req.body);
  // console.log(req.file);
  const about = new About({
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename,
  });
  about
    .save()
    .then((success) => {
      return res.status(200).json({ message: "slider uploaded successfully" });
    })
    .catch((error) => {
      console.log(error);
    });

  //   console.log(req.file);
};
const getAbout = (req, res) => {
  About.find()
    .then((about) => {
      return res.status(200).json(about);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getOneAbout = (req, res) => {
  const { id } = req.params;
  About.findById(id)
    .then((about) => {
      return res.status(200).json(about);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateAbout = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(req.file);
  console.log(id);
  About.findByIdAndUpdate(id, req.body, { image: req.file.filename })
    .then((about) => {
      return res.status(200).json(about);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addAbout,
  getAbout,
  getOneAbout,
  updateAbout,
};
