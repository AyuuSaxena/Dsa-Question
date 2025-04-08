var removeDuplicates = function (nums) {
    let arr = [];
    let freq = {};
    for (let num of nums) {
        if (!freq[num]) {
            freq[num] = 1;
            arr.push(num);
        }
    }
    return arr
};

console.log(removeDuplicates([1, 1, 2]))