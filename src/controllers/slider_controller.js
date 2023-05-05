const Slider = require("../models/slider_schema");
const path = require("path");
const fs = require("fs");

const addSlider = (req, res) => {
  // console.log(req);
  console.log("Slider has been reached");

  // console.log(req.body);
  // console.log(req.file.filename);
  // console.log(req.body.image);
  const slider = new Slider({
    title: req.body.title,
    description: req.body.description,
    link: req.body.btnLink,
    image: req.file.filename,
  });
  slider
    .save()
    .then((success) => {
      return res.status(200).json({ message: "slider uploaded successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAllSliders = (req, res) => {
  Slider.find()
    .then((sliders) => {
      return res.status(200).json(sliders);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteSlider = async (req, res) => {
  const { id } = req.params;
  const slider = await Slider.findOne({ _id: id });
  const fileName = slider.image;
  const filePath = path.join(__dirname, "../upload", fileName); // assuming your Multer configuration specifies 'uploads' as the upload directory
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to delete file");
    } else {
      console.log(`Deleted`);
    }
  });
  Slider.findByIdAndDelete(id)
    .then((success) => {
      return res.status(200).json({ message: "slider deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSlider = (req, res) => {
  const { id } = req.params;
  // console.log(id);
  Slider.findById(id)
    .then((slider) => {
      return res.status(200).json(slider);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateSlider = (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);

  Slider.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((slider) => res.status(200).json(slider))
    .catch((err) => console.log(err));
};

module.exports = {
  addSlider,
  getAllSliders,
  deleteSlider,
  getSlider,
  updateSlider,
};
