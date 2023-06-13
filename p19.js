function sayHello()
{
    console.log("Hello from the function");
}
function drawLine()
{
    var msg="";
    for(var i =0;i<=100;i++)
    {
        msg+='-';
    }
    console.log(msg);
}
drawLine();
sayHello();
drawLine();
//function using paramateres
function displayName(name)
{
    console.log(`name: ${name}`);
}
displayName("Pragathi Yerra");