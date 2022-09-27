/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    let obj = {};
    for(i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            return true;
        } else {
            obj[nums[i]] = true;
        }
    }
    return false;
};