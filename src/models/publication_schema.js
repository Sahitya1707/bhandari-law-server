const mongoose = require("mongoose");
const publicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Publication = mongoose.model("publication", publicationSchema);
module.exports = Publication;
