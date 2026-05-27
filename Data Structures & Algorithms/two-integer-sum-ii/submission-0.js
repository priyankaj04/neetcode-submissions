class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1;
        let result = []
        let val = {}

        while(i < j){
            const sum = numbers[i] + numbers[j]
            if(sum == target){
                return [i+1, j+1]
            } else if(sum > target){
                j--;
            } else if(sum < target){
                i++;
            }
        }

        return []
    }
}
