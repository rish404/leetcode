//https://leetcode.com/problems/missing-number/

//Sum up the numbers in the array and substract the numbers from 1 to nums.length in the same step

var missingNumber = function(nums) {
    let sum = nums.length;
    for (let i = 0; i < nums.length; i++) {
      sum += i - nums[i];
    }
  
    return sum;
  };