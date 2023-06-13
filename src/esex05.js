class Customer{
    constructor(cname,city,email)
    {
        this.cname=cname;
        this.city=city;
        this.email=email;
    }
    getDetails(){
        console.log(`Name: ${this.cname},city:${this.city},email;${this.email}`);
    }
}
let c1=new Customer('sony','mpl','ysspragathi@gmail.com');
let c2=new Customer('mony','mgl','yssmony@gmail.com');
c1.getDetails();
c2.getDetails();