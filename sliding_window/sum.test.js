const lengthOfLongestSubstring = require('./sum');

test('lengthOfLongestSubstring', () => {
    expect(lengthOfLongestSubstring("abccabb")).toBe(3);
    expect(lengthOfLongestSubstring("cccccc")).toBe(1);
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring("abcbda")).toBe(4);
});