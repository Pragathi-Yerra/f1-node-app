export class Employee{
    constructor(ename,job,salary){
        this.ename=ename;
        this.job=job;
        this.salary=salary;
    }
    getDetails(){
        console.log(`Name: ${this.ename},job:${this.job},salary:${this.salary}`);
    }
}