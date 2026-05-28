class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let numsSorted = nums.sort((a,b) => a-b);
        let subarray = []
        let n = nums.length;
        for(let i = 0; i < n; i++){
            console.log("before",i, numsSorted[i], numsSorted[i-1])
            if((i > 0) && (numsSorted[i] == numsSorted[i-1])){
                console.log(i, numsSorted[i], numsSorted[i-1])
             continue;
             }
            let j = i+1, k = nums.length -1

            while(j<k){
                let sum = numsSorted[i]+ numsSorted[j] + numsSorted[k]
                if(sum === 0){
                    subarray.push([numsSorted[i], numsSorted[j], numsSorted[k]])
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k - 1]) k--;
                    j++;
                    k--;
                } else if(sum > 0){
                    k--;
                } else {
                    j++
                }
            }
        }
        return subarray;
    }
}
