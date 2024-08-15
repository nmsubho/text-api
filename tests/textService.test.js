const analyzeText = require('../src/utils/analyzeText');

test('should analyze text correctly', () => {
  const content =
    'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
  const analysis = analyzeText(content);

  expect(analysis.wordCount).toBe(16);
  expect(analysis.charCount).toBe(58);
  expect(analysis.sentenceCount).toBe(2);
  expect(analysis.paragraphCount).toBe(1);
  expect(analysis.longestWords).toEqual(['quick', 'brown', 'jumps', 'slept']);
});
