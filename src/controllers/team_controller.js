// const express = require("express");
const Team = require("../models/team_schema");
const path = require("path");
const fs = require("fs");

const addTeam = (req, res) => {
  console.log("Team has been reached");
  console.log(req.body);
  console.log(req.file);
  const team = new Team({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    image: req.file.filename,
    description: req.body.description,
    additional: req.body.additionalDetails,
    qualification: req.body.qualification,
    experience: req.body.experience,
    designation: req.body.designation,
  });
  team
    .save()
    .then((success) => {
      return res.status(200).json({ message: "slider uploaded successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};
const getAllTeam = (req, res) => {
  Team.find()
    .then((teams) => {
      return res.status(200).json(teams);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteTeam = async (req, res) => {
  const { id } = req.params;
  const team = await Team.findOne({ _id: id });
  const fileName = team.image;
  const filePath = path.join(__dirname, "../upload", fileName); // assuming your Multer configuration specifies 'uploads' as the upload directory
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to delete file");
    } else {
      console.log(`Team Deleted`);
    }
  });
  Team.findByIdAndDelete(id)
    .then((success) => {
      return res.status(200).json({ message: "Team deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getTeam = (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  Team.findById(id)
    .then((team) => {
      return res.status(200).json(team);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateTeam = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(id);
  Team.findByIdAndUpdate({ _id: id }, req.body, { new: true }).then((team) => {
    return res.status(200).json(team);
  });
};
module.exports = {
  addTeam,
  getAllTeam,
  deleteTeam,
  getTeam,
  updateTeam,
};
