var plusOne = function (digits) {
    let strnum = digits.join('');
    let num = (BigInt(strnum) + BigInt(1)).toString();
    let newarr = num.split("");
    for (let num in newarr) {
        newarr[num] = Number(newarr[num]);
    }
    return newarr;
};

console.log(plusOne([9, 9]))
