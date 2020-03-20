const express = require("express");
const server = express();
const db = require("../data/dbconfig.js");
const recipeRouter = require("./routes/recipeRouter");

server.use(express.json());

server.use("/api/recipe", recipeRouter);

server.get("/", (req, res) => {
  res.status(200).send("Welcome to the Recipe Book");
});

module.exports = server;
