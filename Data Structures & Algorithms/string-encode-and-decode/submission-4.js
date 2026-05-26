class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for (const str of strs) {
            result += `${str.length}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let val  = []
        let i = 0;
        while(i < str.length){
            let j = i
            while(str[j] !== '#') j++;

            let len = parseInt(str.slice(i, j));
            val.push(str.slice(j+1, j+1+len))
            i = j+1+len
        }
        return val
    }
}
