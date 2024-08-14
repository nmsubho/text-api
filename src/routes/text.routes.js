const express = require("express");
const textController = require("../controllers/text.controller");

const TextRouter = express.Router();

TextRouter.get("/", textController.getTextList);
TextRouter.get("/:id", textController.getTextById);
TextRouter.post("/", textController.createText);
TextRouter.patch("/:id", textController.updateTextInformation);
TextRouter.delete("/:id", textController.deleteText);

module.exports = TextRouter;
