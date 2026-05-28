class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let subarray = []
        let n = nums.length;
        for(let i = 0; i < n; i++){
            for(let j = i+1; j < n; j++){
                for(let k = j+1; k < n; k++){
                    let sum = nums[i] + nums[j] + nums[k]
                    if(sum == 0){
                        let val = [nums[i], nums[j], nums[k]].sort((a,b) => a - b)
                        console.log(subarray.map(item => item.join(',')).includes(val.join(',')), )
                        if(subarray.map(item => item.join(',')).includes(val.join(','))){
                            continue;
                        }
                        subarray.push(val)
                    }
                }
            }
        }
        return [...new Set(subarray)];
    }
}
