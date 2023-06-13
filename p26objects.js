const person={
    name:"sony",
    age:20
}
console.log(`name is ${person.name}`);
console.log(`name is ${person.age}`);

console.log("_____________________");
const person2={
    name:"sony",
    marks:{
        science:25,
        maths:50,
    }
}
console.log(`Maths marks are ${person2.marks.maths}`);
console.log("---------------------------");
const personnew={
    name:"sony",
    age:20,
    greet: function (){
        console.log("hi sony");
    }
}
// console.log(`call function says= ${personnew.greet()}`);
console.log(personnew.name);
 console.log(personnew.greet());

 console.log("---------------------------");

 let gender={}
gender.name="sony";
gender.age=20;
console.log(gender);
gender.greet=function(){
    console.log(`iam ${gender.name}`)
}
console.log(gender.greet());
console.log("---------------------------");
console.log("usage of this keyword");
var person3={
    name:"sony",
    greet:function(){
        console.log(`my name is ${this.name}`);
    }
}
console.log(person3.greet());
