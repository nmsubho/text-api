const mongoose = require("mongoose");
const textSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    wordCount: Number,
    charCount: Number,
    sentenceCount: Number,
    paragraphCount: Number,
    longestWords: [String],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Text = mongoose.model("Text", textSchema);

module.exports = Text;
