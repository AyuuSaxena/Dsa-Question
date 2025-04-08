// var intersect = function (nums1, nums2) {
//     let arr = [];
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] == nums2[j]) {
//                 arr.push(nums2[j]);
//             }
//         }
//     }
// };

// console.log(intersect([1, 2, 2, 1], [2, 2]))


var intersect = function (nums1, nums2) {
    let arr = [];
    let temp;
    for (let i = 0; i < nums1.length; i++) {

        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                arr.push(nums2[j]);
                nums2.splice(j, 1);
                break;
            }

        }

        temp = nums1[i];
    }
    return arr;
}

console.log(intersect([1, 2, 2, 1], [2]))


var intersect = function (nums1, nums2) {
    let arr = [];
    nums1.filter((v, r) => {
        if (nums2.includes(v)) {
            arr.push(v);
        }
    })
    return arr;
}

console.log(intersect([1, 2, 2, 1], [2]))


