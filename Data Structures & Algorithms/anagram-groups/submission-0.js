class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let val = {}
        for(let i = 0; i < strs.length; i++){
            console.log(strs[i].split('').sort().join(''));
            let sortedVal = strs[i].split('').sort().join('')
            if(val[sortedVal] !== undefined){
                val[sortedVal].push(strs[i])
            } else {
                val[sortedVal] = [strs[i]]
            }
        }
        return Object.values(val);
    }
    
}
