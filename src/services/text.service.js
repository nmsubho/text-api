const Text = require("../models/text.model");
const analyzeText = require("../utils/analyzeText");

createText = async (content) => {
  const analysis = analyzeText(content);

  const result = await Text.create({
    content,
    ...analysis,
  });

  return result;
};

getTextList = async () => {
  const result = await Text.find();
  const total = await Text.countDocuments();

  return { data: result, meta: { total } };
};

getTextById = async (id) => {
  const result = await Text.findById(id);
  return result;
};

updateTextInformation = async (content, id) => {
  const analysis = analyzeText(content);
  const result = await Text.findOneAndUpdate(
    { _id: id },
    {
      content,
      ...analysis,
    },
    {
      new: true,
    }
  );

  return result;
};

deleteText = async (id) => {
  const result = await Text.findByIdAndDelete(id);

  return result;
};

const TextService = {
  createText,
  getTextList,
  getTextById,
  updateTextInformation,
  deleteText,
};

module.exports = TextService;
