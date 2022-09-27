/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    let memory = {};
    for(i = 0; i < nums.length; i++) {
        if(memory[nums[i]] === undefined) {
            memory[nums[i]] = 'haha'
        } else {
            return true;
        }
    }
    return false;
};