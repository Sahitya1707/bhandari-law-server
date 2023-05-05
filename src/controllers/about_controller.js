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
  // console.log(`Route has been updated.`);
  const { id } = req.params;
  console.log(req.body);

  console.log(req.file);

  const update = {
    image: req.file.filename,
  };
  // console.log(id);
  About.findOneAndUpdate({ _id: id }, req.body, update, { new: true })
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
