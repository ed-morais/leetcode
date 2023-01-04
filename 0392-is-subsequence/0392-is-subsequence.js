/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // if s is greather than t, it can't be a subsequence of it.
    if (s.length > t.length) return false;
    
    let subsequence = 0;
    // Iterate over the t string and compare it with the s string
    for (let i = 0; i < t.length; i++) {
        if (s[subsequence] == t[i]) {
            // If it is matching, increment subsequence
            subsequence++;
        }
    }
    return subsequence == s.length
};