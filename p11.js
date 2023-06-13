var a=0,b=1,c,i=1;
var msg='';
do{
c=a+b;
msg+=`${c} `;
a=b;
b=c;
i++;
}while(i<10)
console.log(msg);
//mult using do while
var n=6,i=1;
do{
   console.log(`${n}*${i}=${n*i}`) 
   i++;
}while(i<=10)
//fact using do while
var fact=1,n=5;
do{
fact=fact*n;
n--;

}while(n>0)
console.log(`factorial of 5 is ${fact}`);
