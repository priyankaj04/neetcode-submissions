class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let val = {};
        let isduplicate = false
        for(let i = 0; i < nums.length; i++){
            if(val[nums[i]]){
                isduplicate = true
                break;
            } 
            val[nums[i]] = 1
        }
        return isduplicate;
    }
}
