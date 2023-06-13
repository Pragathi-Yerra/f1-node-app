var i=1;
while(i<=10)
{
    console.log(i);
    i++;
}

i=1;
var msg=''
while(i<=10)
{
msg+=`${i} `;
i++;
} 
console.log(msg);
i=1;
var msg=''
while(i<=10)
{
msg+=`${i} `;
i=i+2;
} 
console.log(msg);
i=2;
var msg=''
while(i<=10)
{
msg+=`${i} `;
i=i+2;
} 
console.log(msg);
i=5;
var msg=''
while(i>0)
{
msg+=`${i} `;
i--;
} 
console.log(msg);
i=1;
var msg=''
while(i<=5)
{
msg+=`${i*i} `;
i++;
} 
console.log(msg);
//fibonacci series
var a=0,b=1,i=1;
var msg='0 1 ';
while(i<10)
{
    c=a+b;
    msg+=`${c} `;
    a=b;
    b=c;
    i++;
}
console.log(msg);
//factorial
var n=6;
var fact=1;
for(var i=1;i<=n;i++)
{
    fact=fact*i;
}
console.log(`factorial value of ${n} is ${fact}`);
//multiplication table
var n=9;
for(var i=1;i<=10;i++)
{
    console.log(`${n}*${i}=${n*i}`);
}
