const analyzeText = content => {
  
  // Remove punctuation and spaces for character count
  const charCount = content
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, '').length;

  // Calculate word count (considering words are separated by spaces)
  const wordCount = content.split(/\s+/).length;

  // Calculate sentence count (considering sentences end with . ! or ?)
  const sentenceCount = content.split(/[.!?]/).filter(Boolean).length;

  // Calculate paragraph count (considering paragraphs are separated by two newlines)
  const paragraphCount = content.split(/\n\n/).filter(Boolean).length;

  // Find all longest words in each paragraph
  const allWords = content.split(/\s+/).filter(Boolean);
  const maxLength = Math.max(...allWords.map(word => word.length));
  const longestWords = [
    ...new Set(allWords.filter(word => word.length === maxLength)),
  ];

  return {
    wordCount,
    charCount,
    sentenceCount,
    paragraphCount,
    longestWords,
  };
};

module.exports = analyzeText;
