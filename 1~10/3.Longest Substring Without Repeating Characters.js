/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLen,l,r;

    if (s.length < 2) {
        return s.length;
    }

    maxLen = 0;

    for (l = 0, r = 1; r < s.length; r++) {
        i = s.lastIndexOf(s[r], r-1);
        if (i >= 0) {
            maxLen = Math.max(maxLen, r - l);
            l = Math.max(l, i + 1);
        }
    }
    return Math.max(maxLen, r - l);
};