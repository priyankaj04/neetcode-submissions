class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s == '') return 0

        let lastSeen = new Map();
        let maxCount = 0;
        let left = 0;

        for(let i = 0; i < s.length; i++){
            if(lastSeen.has(s[i]) && lastSeen.get(s[i]) >= left){
                left = lastSeen.get(s[i]) + 1
            }
            lastSeen.set(s[i], i);
            maxCount = Math.max(maxCount, i - left + 1)
        }
        return maxCount;
    }
}
