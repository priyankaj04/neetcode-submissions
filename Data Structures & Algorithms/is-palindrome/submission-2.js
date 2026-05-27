class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const val = s.replaceAll(' ', '').replaceAll(/[\s,.?/\-+&%$#@!*\'':]/g, '').toLowerCase();

        let i = 0, j=val.length-1

        while(i<j){
            if(val[i] === val[j]){
                j--;
                i++
            } else {
                return false
            }
        }

        return true
    }
}
