//json- javascript object notation
var s={ "id":100,"sname":"pragathi","course":"btech","fee":5000};
console.log(s);
for(var i in s)
{
    console.log(`${i}= ${s[i]}`);
}
//
var emp={"id":100,"ename":"sony","job":"developer","salary":700000};
console.log(emp);
for(var i in emp)
{
    console.log(`${i}= ${emp[i]}`);
}
//
var person={"id":500,"pname":"yerra","gender":"female","age":20};
console.log(person);
for(var i in person)
{
    console.log(`${i}= ${person[i]}`);
}
//
var employees=[
    {"id":1001,"ename":"kiran","job":"developer","salary":5000},
    {"id":1002,"ename":"sony","job":"teacher","salary":2000},
    {"id":1003,"ename":"mony","job":"doctor","salary":8000},
    {"id":1004,"ename":"padma","job":"lawyer","salary":10000},   
]
console.log("using var in");

for(var i=0;i<employees.length;i++)
{
    var e=employees[i];
    console.log(`${e.id},${e.ename},${e.job},${e.salary}`);
}
console.log("using var of");
for(var e of employees)
{
    console.log(`${e.id},${e.ename},${e.job},${e.salary}`);
}