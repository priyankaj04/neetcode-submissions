class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let val1 = {}, val2 = {}
        for(let i = 0; i < s.length; i++){
            if(val1[s[i]]){
                val1[s[i]] += 1
            } else {
                val1[s[i]] = 1
            }

            if(val2[t[i]]){
                val2[t[i]] += 1
            } else {
                val2[t[i]] = 1
            }
        }

        for(let j = 0; j < s.length; j++){
            if(val1[s[j]] !== val2[s[j]]){
                return false
            }
        }

        return true
    }
}
