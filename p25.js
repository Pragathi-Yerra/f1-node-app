//FE function expression
// function assigned to a variable called FE this function can be passed as argument to another function
var square=function(n){
    return n*n;
}
var cube=function(n){
    return n*n*n;
}
var calculate=function(n,cb){
    return cb(n);
}
var calculateNumbers=function(cb,a,b){
    return cb(a,b);
}
var add=function(a,b){
    return a+b;
}
var big=function(a,b){
    return a>b?a:b;
}
var small=function(a,b){
    return a<b?a:b;
}

console.log(calculate(5,square));
console.log(calculate(5,cube));
console.log(calculateNumbers(add,5,6));
console.log(calculateNumbers(big,5,6));
console.log(calculateNumbers(small,5,6));