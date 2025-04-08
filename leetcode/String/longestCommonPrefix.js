// var longestCommonPrefix = function (strs) {
//     let commonPrefix = "";
//     const firstWordArr = strs[0].split('');
//     for (let i = 0; i < firstWordArr.length; i++) {
//         if (firstWordArr.length === 1) {
//             return firstWordArr[0];
//         }
//         let counter = 0;
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[j].includes(firstWordArr[i])) {
//                 counter++;
//             }
//             if (counter === strs.length - 1) {
//                 commonPrefix = commonPrefix.concat(firstWordArr[i]);
//             }
//         }
//     }
//     return commonPrefix;

// };

var longestCommonPrefix = function (strs) {
    let commonPrefix = "";
    const firstWordArr = strs[0].split('');
    for (let i = 0; i < firstWordArr.length; i++) {
        if (firstWordArr.length === 1) {
            return firstWordArr[0];
        }
        let counter = 0;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].includes(firstWordArr[i])) {
                counter++;
            }


            if (counter === strs.length - 1  && ( - firstWordArr.indexOf(firstWordArr[(i)])) === 1) {
                commonPrefix = commonPrefix.concat(firstWordArr[i]);
            }

        }
        console.log(counter === strs.length - 1, (i - firstWordArr.indexOf(firstWordArr[(i)])) === 1, i, firstWordArr.indexOf(firstWordArr[(i - 1)]), firstWordArr[(i - 1)])
    }
    return commonPrefix;

};



// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))
console.log(longestCommonPrefix(["cir", "car"]))
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))