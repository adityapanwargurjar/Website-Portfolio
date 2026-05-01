const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

// Schema
const Project = mongoose.model("Project", {
  title: String,
  description: String,
});

// Routes
app.get("/projects", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

app.post("/projects", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json({ message: "Project added" });
});

app.listen(5000, () => console.log("Server running on port 5000"));