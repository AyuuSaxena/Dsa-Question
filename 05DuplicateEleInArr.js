const arr = [1, 2, 4, 3, 5, 1];

const sortedArr = arr.sort()

const dupEle = [];

for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1] ) {
        if (!dupEle.includes(sortedArr[i])) {
            dupEle.push(sortedArr[i])
        }

    }
}

console.log(dupEle)

//doubt

var removeDuplicates = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[i] !== nums[j]) {

            }
        }
    }
    return arr
};