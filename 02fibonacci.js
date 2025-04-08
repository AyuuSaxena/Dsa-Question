// 0 1 1 2 3 5 // sum of two preceding no.
// 0 1 2 3 4 5

// function fibonacci(number) {
//     let firstNo = 0, secondNo = 1, sum;
//     for (let i = 0; i < number; i++){
//         sum = firstNo + secondNo
//     }

//     return series;
// }

// console.log(fibonacci(5))


// 0 1 1 2 3 5 8 13
// 0 1 2 3 4 5 6 7
function fibonaci(num) {
    let prev = 0, cur = 1, next, series = [];

    for (let i = 0; i < num; i++) {
        next = prev + cur;
        if (i = 0) {
            next=prev
        }
        
        prev = cur;
        cur = next;
        series = [...series, next]
    }
    series.unshift(0)
    return series
}
console.log(fibonaci(6))