const express = require("express");
const projectRouter = express.Router();
const Projects = require("./project-models");

projectRouter.get("/", (req, res) => {
    Projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json({ message: "could not retrieve projects; go drink a root beer float!!!"}))
})

projectRouter.post("/", (req, res) => {
    Projects.addProject(req.body)
        .then(projects => res.status(200).json(req.body))
})

module.exports = projectRouter;