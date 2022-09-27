/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
    
*/
function search(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while(low <= high) {
        let mid = Math.floor((high + low) / 2);
        guess = nums[mid];
        if (guess == target) {
            return mid
        }
        if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
    nums = [-1,0,3,5,9,12]
};