function missing(num){
    let sum = 0 ;
    
    //num 2
    for (let i=0; i<num.length;i++)
    {
        sum = sum + num[i];
    }
    
    return num.length*(num.length + 1)/2 -sum
}
console.log(missing([3,0,1,5,2]))
