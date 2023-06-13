//for of
var items=['scale','pencil','eraser','ticket','chocolate'];
for(var item of items)
{
    console.log(item);
}
//for in
for(var i in items)
{
    console.log(`items[${i}]=${items[i]}`);
}