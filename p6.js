var marks=500;
if(marks>=0 && marks<=100)
console.log("valid");
else
console.log("invalid");
var m=100,p=90,c=90;
console.log(`total marks are ${m+p+c}`);
console.log(`average marks are ${(m+p+c)/3}`);
var average=(m+p+c)/3;
console.log(average);
if(average>=92 && average <=100)
console.log("S grade");
else if(average>=82 && average<=91)
console.log("A+ grade");
else if(average>=72 && average<=81)
console.log("A grade");
else
console.log("Fail");