class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let val = {};
        for(const num of nums){
            if(val[num] !== undefined){
                val[num] += 1
            } else {
                val[num] = 1
            }
        }
        return Object.keys(val).sort((a,b) => val[b] - val[a]).slice(0,k)
    }
}
