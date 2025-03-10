const palingdromeTest =(num)=>{
    let output = 0 , sameNum = num;
    while(sameNum >0)
    {
        let lastDigit = sameNum % 10 ;
        output = output *10 + lastDigit ;
        sameNum = Math.floor(sameNum/10) ;
    }
    return output === num
 }
 
 console.log(palingdromeTest(1321))