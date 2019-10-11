const express = require("express");
const server = express();

server.use(express.json());

const port = 1910;

server.listen(port, () => {
    console.log("Tuned in to 1910");
})

server.get("/", (req, res) => {
    res.send("We're in business");
})