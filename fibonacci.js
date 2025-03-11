function fibonaci(num)
{
    
    let prev = 0 , cur = 1, next, series =[] ;
    series =[ prev , cur]
    for(let i =1; i<num;i++) 
    {
        next = prev+cur; 
        prev=cur;
        cur=next;
        series =[...series , next]
         
    }
    return series
}

console.log(fibonaci(6))