var containsDuplicate = function (nums) {

    let arr = [];
    let freq = {};
    for (let num of nums) {
        if (freq[num]) {
            return true;
        } else {
            freq[num] = (freq[num]||0) + 1;
        }
    }
    return arr
};

console.log(containsDuplicate([1, 2, 3, 1]));