var employees=require("./employeeModule");
for(let e of employees)
{
    console.log(`${e.id},${e.ename},${e.job},${e.salary}`);
}