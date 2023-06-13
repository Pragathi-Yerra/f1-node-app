
function person(){
    this.name="sony",
    this.age=20,
    this.greet=function(){
        console.log(`this is ${this.name} and my age is ${this.age}`)
    }
}
person1=new person();
person2=new person();

console.log(person1.name);
console.log(person2.name);
console.log("---------------------------------------------");

function Person_details(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
const person_det1=new Person_details("sony",20,"female");
const person_det2=new Person_details("mony",26,"female");
console.log(`${person_det1.name},${person_det1.age},${person_det1.gender}`);
console.log(`${person_det2.name},${person_det2.age},${person_det2.gender}`);
console.log("---------------------------------------------");
console.log("adding new property to constructor function")
function Personadd(){
    this.name="sony",
    this.age=20
}
//console.log(Personadd.gender);
let person4=new Personadd();
Personadd.prototype.gender="female";
console.log(person4.gender);