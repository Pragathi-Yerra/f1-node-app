//Before ES6
const person={
    name:"sony",
    age:20,
    gender:"female"
}
let name=person.name;
let age=person.age;
let gender=person.gender;
console.log(`${name},${age},${gender}`);
console.log("-----------------------------");
//After ES6

const person1={
    p1name:"sony",
    p1age:20,
    p1gender:"female"
}
// destructuring assignment
var {p1name,p1age,p1gender}=person1;
var {p1name:Myname,p1age:Myage,p1gender:Mygender}=person1;

// console.log(p1name);
// console.log(p1age);
// console.log(p1gender);
console.log(`Myname is ${Myname}`);
console.log(`Myage is ${Myage}`);
console.log(`Mygender is ${Mygender}`);

console.log("==================================");
let arr=["one","two","three"]
let [a,b,c]=arr;
console.log(a);
console.log(b);
console.log(c);
let[x,,z]=arr;
console.log(x);
console.log(z);
console.log("-----------------------------------");
let arrVal=["one","two","three","four"];
let[x1,...y1]=arrVal
console.log(`x1 is ${x1}`);
console.log(`x2 is ${y1}`);

console.log("----------------------------------------");
const newperson={
    newname:"sony",
    newage:20,
    newgender:"female"
}

let{newname,...rest}=newperson;
console.log(newname);
console.log(rest);

console.log("==========================================");