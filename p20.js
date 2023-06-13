function multiplicationTable(num)
{
    for(var i=1;i<=10;i++)
    {
        console.log(`${num}*${i}=${num*i}`);
    }
}
function fibonacciSeries(num)
{
    var a=0;
    var b=1,c,msg='';
    for(var i=1;i<num;i++)
    {
        c=a+b;
        msg+=`${c} `
        a=b;
        b=c;
    }
    console.log(msg);
}
multiplicationTable(9);
fibonacciSeries(10);