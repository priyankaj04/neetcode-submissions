class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let maxVal = 0
        while(i<j){
            let area = Math.min(heights[i], heights[j]) * (j-i)
            maxVal = Math.max(maxVal,area );
            if(heights[i] < heights[j]){
                i++
            } else {
                j--;
            }
        }
        return maxVal;
    }
}
