class Person{
    setDetails(pname,gender,age){
        this.pname=pname;
        this.gender=gender;
        this.age=age;
    }
    getDetails(){
        console.log(`name: ${this.pname},Gender: ${this.gender},Age:${this.age}`);
    }
}
let p1=new Person();
p1.setDetails("sony","female",20);
p1.getDetails();