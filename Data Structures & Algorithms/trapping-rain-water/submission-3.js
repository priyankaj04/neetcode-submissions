class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0, j = height.length-1;
        let totCount = 0
        let maxLeft = 0, maxRight = 0;
        while(i<j){
            maxLeft = Math.max(maxLeft, height[i])
            maxRight = Math.max(maxRight, height[j])

            if(maxLeft < maxRight){
                totCount += Math.min(maxLeft, maxRight) - height[i]
                i++;
            }

            if(maxLeft >= maxRight){
                totCount += Math.min(maxLeft, maxRight) - height[j]
                j--;
            }
        }

        return totCount;
    }
}
