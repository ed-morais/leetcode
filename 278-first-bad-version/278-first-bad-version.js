/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1
        let end = n
        
        while(start <= end){
            //find mid index
            let mid = Math.floor((start + end)/2)
            
            if(isBadVersion(mid)) {
                // Bad version found, look left for more bad versions
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
};