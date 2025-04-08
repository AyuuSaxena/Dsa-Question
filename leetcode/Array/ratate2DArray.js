var rotate = function (matrix) {
    let newArr = [];
    for (let k = 0; k < matrix.length; k++) {
        let subArr = [];
        for (let i = matrix.length - 1; i >= 0; i--) {
            for (let j = k; j < matrix[i].length; j++) {
                subArr.push(matrix[i][j]);
                break;
            }
        }
        newArr.push(subArr);
    }
    return newArr;
};

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))

[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]