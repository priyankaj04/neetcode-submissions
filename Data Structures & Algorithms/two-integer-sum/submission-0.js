class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let val1 = {}
        for(let i = 0; i < nums.length; i++){
            console.log(nums[i], target - nums[i])
            if(val1[nums[i]] !== undefined){
                return [val1[nums[i]], i]
            }
            val1[target - nums[i]] = i

            console.log(val1);
            
        }

        return []
    }
}
