const mongoose = require("mongoose");
const metaTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    selectedMeta: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Meta = mongoose.model("meta", metaTagSchema);
module.exports = Meta;
