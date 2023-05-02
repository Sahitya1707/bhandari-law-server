const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    additional: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
