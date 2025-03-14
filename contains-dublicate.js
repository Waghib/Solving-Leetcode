class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
       }
        return false;
    }
}

const solution = new Solution();
console.log(solution.hasDuplicate([1, 2, 2, 3])); // true
console.log(solution.hasDuplicate([1, 2, 3, 1])); // true
console.log(solution.hasDuplicate([1, 2, 3, 4])); // false

// Approach
// 1. Create a new set called seen.
// 2. Iterate through the given array nums.
// 3. If the current num is already in the seen set, return true.
// 4. Otherwise, add the current num to the seen set.
// 5. If the loop completes, return false.
// 6. The time complexity is O(n) and the space complexity is O(n).