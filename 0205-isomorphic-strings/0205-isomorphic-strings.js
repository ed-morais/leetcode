/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // For when the string lengths are different
    if (s.length != t.length)
        return false;
    
    // Creating two maps
    const map1 = [];
    const map2 = [];
    
    // Iterate through all the elements
    for (let i = 0; i < s.length; i++) {
        // Compare the maps, if not equal, return false
        if(map1[s.charAt(i)] != map2[t.charAt(i)])
            return false;
        // Insert each character if string s and t into separate map
        map1[s.charAt(i)] = i + 1;
        map2[t.charAt(i)] = i + 1;
    }
    return true;
};