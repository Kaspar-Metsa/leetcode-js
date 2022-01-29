function lengthOfLongestSubstring(s) {
    if (s.length <= 1) return s.length;

    const seen = {};
    let left = 0, longest = 0;

    for (let r = 0; r < s.length; r++) {
        const cur = s[r];
        const prev = seen[cur];
        if (prev >= left) {
            left = prev + 1;
        }
        seen[cur] = r;
        longest = Math.max(longest, r - left + 1);
    }
    return longest;
}
module.exports = lengthOfLongestSubstring;