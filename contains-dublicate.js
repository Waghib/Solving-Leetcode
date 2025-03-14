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
