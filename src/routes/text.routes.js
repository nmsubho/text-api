const express = require("express");
const textController = require("../controllers/text.controller");

const TextRouter = express.Router();

TextRouter.get("/", textController.getTextList);
TextRouter.get('/:id/number-of-words', textController.getNumberOfWords);
TextRouter.get(
  '/:id/number-of-characters',
  textController.getNumberOfCharacters
);
TextRouter.get('/:id/number-of-sentences', textController.getNumberOfSentences);
TextRouter.get(
  '/:id/number-of-paragraphs',
  textController.getNumberOfParagraphs
);
TextRouter.get('/:id/longest-words', textController.getLongestWords);
TextRouter.get('/:id', textController.getTextById);
TextRouter.post("/", textController.createText);
TextRouter.patch("/:id", textController.updateTextInformation);
TextRouter.delete("/:id", textController.deleteText);

module.exports = TextRouter;
