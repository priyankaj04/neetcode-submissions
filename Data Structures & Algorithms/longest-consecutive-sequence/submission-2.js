class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(!nums.length) return 0;
        const numsSorted = [...new Set(nums.sort((a,b) => a - b))];

        let max = 1;
        let i = 0, j = 1;
        let count = 1;

        while(i < j && j < numsSorted.length){
            if(numsSorted[j] === (numsSorted[i] + count)){
                count += 1
                max = Math.max(max, count);
                j++;
            } else {
                count = 1;
                i = j;
                j++;
            }
        }

        return max;
    }
}
