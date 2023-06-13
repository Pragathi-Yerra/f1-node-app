class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes noise`);
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    barks(){
        console.log(`${this.name} barks`)
    }
}
//var animal = new Animal("Tiger");
//animal.speak();
let d = new Dog('Pug');
d.speak();
d.barks();