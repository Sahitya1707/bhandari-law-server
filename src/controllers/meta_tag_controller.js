const Meta = require("../models/meta_tag_schema");

const addMeta = (req, res) => {
  // console.log("Meta has been reached");

  console.log(req.body);
  const meta = new Meta({
    title: req.body.title,
    keyword: req.body.keyword,
    description: req.body.description,
    selectedMeta: req.body.select,
  })
    .save()
    .then((success) => {
      return res
        .status(200)
        .json({ message: "Metatag has been uploaded successfully." });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getAllMeta = (req, res) => {
  Meta.find()
    .then((meta) => {
      return res.status(200).json(meta);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMeta = (req, res) => {
  // console.log(`Get meta has been reached`);
  // console.log(req.params);
  const { id } = req.params;
  Meta.findById(id)
    .then((meta) => {
      return res.status(200).json(meta);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteMeta = (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  // console.log(metaId);
  Meta.findByIdAndDelete(id)
    .then((meta) => {
      return res.status(200).json(meta);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateMeta = (req, res) => {
  // console.log(`update meta`);
  // console.log(req.body);
  const { id } = req.params;
  Meta.findByIdAndUpdate(id, req.body)
    .then((meta) => {
      return res.status(200).json(meta);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addMeta,
  getAllMeta,
  getMeta,
  deleteMeta,
  updateMeta,
};
