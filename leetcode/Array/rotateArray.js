// var rotate = function (nums, k) {
//     nums.forEach((v, i) => {
//         if (k > i && k < nums.length) {
//             nums.unshift(nums[nums.length - 1]);
//             nums.pop();
//         }
//     });
//     return nums;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))

var rotate = function (nums, k) {
    k = k % nums.length;
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (i<k) {
            temp.push(nums[i])
        }
    }
    return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
 //console.log(rotate([1, 2], 3))