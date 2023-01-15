/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    for(let i of strs){
        //sort each word alphabetically
        let key = i.split('').sort().join('')
        //console.log(key)
        if(!obj[key]){
            obj[key] = [i]
        }else{
            obj[key].push(i)
        }
    }
    return Object.values(obj)
};