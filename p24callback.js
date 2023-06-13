//callback: it is a function, which contains functions as argument
//it is used for asynchronous programming and instant implementation
function sayHello(){
    console.log("Hello from functions");
}
function sayHi(){
    console.log("hi from functions");
}
function display(cb){
    cb();
}
display(sayHello);
display(sayHi);