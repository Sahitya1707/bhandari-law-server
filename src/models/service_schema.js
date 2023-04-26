const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    expertise: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    metaTitle: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Slider = mongoose.model("slider", sliderSchema);

module.exports = Slider;
