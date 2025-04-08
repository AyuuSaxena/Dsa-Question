var singleNumber = function (nums) {
    let numb;
    let obj = {};
    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            numb = key;
        }
    }
    return numb
};

console.log(singleNumber([4, 1, 2, 1, 2]))

