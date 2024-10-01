// Solving leetcode problem number 217: Contains Duplicate
// Description: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Difficulty: Easy

// Approach1: Using Set
// Time complexity: O(n)
// Space complexity: O(n)

var containsDuplicate = function(nums) {
    let set = new Set();
    for (let i =0; i < nums.length; i++) {
        if (set.has(nums[i])){
            return true;
        }
        else {
            set.add(nums[i]);
        }
    }
    return false;
}
nums = [1,2,3,1];
console.log(containsDuplicate(nums)); // Output: true
nums = [1,2,3,4];
console.log(containsDuplicate(nums)); // Output: false
nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums)); // Output: true

// Approach2: Using Sorting
// Time complexity: O(nlogn)
// Space complexity: O(1)

var containsDuplicate = function(nums) {
    nums.sort()