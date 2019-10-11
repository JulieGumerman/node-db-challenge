const db = require("../data/dbconfig.js");

const getProjects = () => {
    return db("projects");
}

const addProject = (project) => {
    return db("projects").insert(project)
}

module.exports = {
    getProjects,
    addProject
}