function missingNo(nums) {
    let arr = [], missingNo = 0;

    //arr for soring
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === nums[j]) {
                arr.push(i)
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i !== arr[i]) {
            return i
        }
    }
}

console.log(missingNo([1, 3, 0,5,2,6,7,8]));




// function missingNo(nums) {
//     let sum = 0, actualSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     console.log(sum,actualSum)
//     return actualSum - sum
// }

// console.log(missingNo([1, 3, 2,0,4,5]));