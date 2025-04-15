class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let sSort = s.split("").sort().join("");
        let tSort = t.split("").sort().join("");

        return sSort === tSort;
    }
}

const solution = new Solution();
console.log(solution.isAnagram("anagram", "nagaram")); // true
console.log(solution.isAnagram("rat", "car")); // false
