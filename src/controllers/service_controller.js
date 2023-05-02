const Service = require("../models/service_schema");
const path = require("path");
const fs = require("fs");

const addService = (req, res) => {
  console.log(req.body);
  const service = new Service({
    title: req.body.title,
    image: req.file.filename,
    description: req.body.description,
    expertise: req.body.expertise,
    testimonials: req.body.testimonials,
    overview: req.body.overview,
    content: req.body.content,
  });
  service
    .save()
    .then((success) => {
      return res
        .status(200)
        .json({ message: `Service has been updated successfully` });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getAllService = (req, res) => {
  Service.find()
    .then((service) => {
      return res.status(200).json(service);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteService = async (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  const service = await Service.findOne({ _id: id });

  //   console.log(service);
  const fileName = service.image;
  //   console.log(fileName);
  const filePath = path.join(__dirname, "../upload", fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to delete file");
    } else {
      console.log(`Deleted`);
    }
  });
  Service.findByIdAndDelete(id)
    .then((success) => {
      return res.status(200).json({ message: "Service deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getService = (req, res) => {
  const { id } = req.params;
  Service.findById(id)
    .then((service) => {
      return res.status(200).json(service);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { addService, getAllService, deleteService, getService };
