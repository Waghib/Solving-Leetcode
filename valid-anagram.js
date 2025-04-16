class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Approach 1: Using Sorting
    // Time complexity: O(nlogn)
    // Space complexity: O(n)

    // isAnagram(s, t) {
    //     if(s.length !== t.length){
    //         return false;
    //     }

    //     let sSort = s.split("").sort().join("");
    //     let tSort = t.split("").sort().join("");

    //     return sSort === tSort;
    // }

    // Approach 2: Using a Hash Map
    // Time complexity: O(n)
    // Space complexity: O(n)

    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const charCount = {};

        for (let char of s) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        for (let char of t) {
            if (!charCount[char]) {
                return false;
            }
            charCount[char] -= 1;
        }

        return true;
    }
}

const solution = new Solution();
console.log(solution.isAnagram("anagram", "nagaram")); // true
console.log(solution.isAnagram("rat", "car")); // false
