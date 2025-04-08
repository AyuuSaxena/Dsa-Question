const arr = [1, 2, 3, 4, 5]

const index=arr.find((i,index) => {
    if (i === 4) {
        console.log(i, index)
        return index
    }
})

console.log(index)