const express = require("express");
const TextRouter = require("./text.routes");
const routes = express.Router();


routes.use("/texts", TextRouter);

module.exports = routes;
