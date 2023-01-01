/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    let rightSum = 0
    let leftSum = 0
    
    // Calculate the sum of the entire array 
    // O(n)
    nums.forEach((v) => (rightSum += v))
    
    // O(n)
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        
        // The right sum no longer contains the current number.
        rightSum -= curr;
        
        // If left sum equals the right sum, we return the index.
        if(leftSum === rightSum) return i;
        
        // We did not find a match, left sum now contains the current number.
        leftSum += curr
    }
    return -1
};