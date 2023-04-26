const Slider = require("../models/slider_schema");
// const path = require("path");

const addSlider = (req, res) => {
  // console.log(req);
  console.log("Slider has been reached");

  // console.log(req.file);
  const slider = new Slider({
    title: req.body.title,
    description: req.body.description,
    link: req.body.btnLink,
    // image: req.file.name,
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

const getSlider = (req, res) => {
  const { sliderId } = req.params;
  Slider.find({ _id: sliderId })
    .then((slider) => {
      return res.status(200).json(slider);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateSlider = (req, res) => {
  Slider.findByIdAndUpdate(req.params.sliderId, req.body, { new: true })
    .then((slider) => res.status(200).json(slider))
    .catch((err) => console.log(err));
};

const deleteSlider = (req, res) => {
  Slider.findByIdAndDelete(req.params.sliderId)
    .then((slider) => res.status(200).json(slider))
    .catch((err) => console.log(err));
};

module.exports = {
  addSlider,
  getAllSliders,
  getSlider,
  updateSlider,
  deleteSlider,
};
