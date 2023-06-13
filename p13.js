var items=['scale','pencil','eraser','ticket','chocolate'];
for(var i=0;i<items.length;i++)
{
    console.log(items[i]);
}
//using while
var i=0;
while(i<items.length)
{
    console.log(`items[${i}]=${items[i]}`);
    i++;
}
//using do while loop
i=0;
do{
    console.log(items[i]);
    i++;
}while(i<items.length);
